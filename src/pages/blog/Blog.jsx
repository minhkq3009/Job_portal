import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BlogCardHorizontal from "../../components/Blog/BlogCardHorizontal";
import KeywordInput from "../../components/InputField/KeywordInput";
import LabelTag from "../../components/Label/LabelTag";
import Pagination from "../../components/Button/Pagination";
import { Search } from "lucide-react";
import { blogPosts, recentPosts, galleryImages } from "../../data/index";

/**
 * Blog page component
 * Displays blog post list with search, category filtering and pagination functionality
 */
export default function Blog() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Categories data
  const categories = [
    { id: 'all', name: 'All Categories', count: 25 },
    { id: 'career', name: 'Career Development', count: 8 },
    { id: 'interview', name: 'Interview Tips', count: 6 },
    { id: 'resume', name: 'Resume Writing', count: 4 },
    { id: 'remote', name: 'Remote Work', count: 5 },
    { id: 'salary', name: 'Salary', count: 3 },
    { id: 'networking', name: 'Networking', count: 2 }
  ];

  // Popular tags
  const popularTags = [
    'Career', 'Interview', 'Remote Work', 'Salary', 'Networking', 
    'Job Search', 'Resume', 'Skills', 'Leadership', 'Growth'
  ];

  /**
   * Handle read more button click
   * @param {number} blogId - Blog post ID
   */
  const handleReadMore = (blogId) => {
    // Find the blog post to get its slug
    const blog = blogPosts.find(post => post.id === blogId);
    if (blog) {
      navigate(`/blog/${blog.slug}`);
    }
  };

  /**
   * Handle category click
   * @param {string} categoryId - Category ID
   */
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  /**
   * Handle search
   * @param {string} term - Search keyword
   */
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  /**
   * Handle tag click
   * @param {string} tag - Tag name
   */
  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  /**
   * Handle pagination change
   * @param {number} page - Page number
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <CandidateHeader />
      
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb title="Blog" />

                 {/* Main Content */}
         <div className="container py-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Sidebar - 4 columns */}
            <div className="col-span-12 lg:col-span-4">
              {/* Search & Categories Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
                {/* Search Section */}
                <div className="mb-6">
                  <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                    Search Articles
                  </h3>
                  <div className="relative">
                    <KeywordInput
                      placeholder="Search blog posts..."
                      value={searchTerm}
                      onChange={handleSearch}
                      icon={Search}
                    />
                  </div>
                </div>

                {/* Categories Section */}
                <div>
                  <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-body-sm text-gray-500">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Posts Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <BlogCardHorizontal
                      key={post.id}
                      variant="compact"
                      image={post.image}
                      date={post.date}
                      commentsCount={post.commentsCount}
                      title={post.title}
                      onButtonClick={() => handleReadMore(post.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Gallery Block - Limited to 6 images */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                  Gallery
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.slice(0, 6).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Popular Tags Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <LabelTag
                      key={index}
                      label={tag}
                      onClick={() => handleTagClick(tag)}
                      className="cursor-pointer hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>

                         {/* Main Content - 8 columns */}
             <div className="col-span-12 lg:col-span-8">
              {/* Blog Posts */}
              <div className="space-y-6">
                {blogPosts.slice(0, 8).map((blog) => (
                  <BlogCardHorizontal
                    key={blog.id}
                    image={blog.image || `https://picsum.photos/400/250?random=${blog.id}`}
                    date={new Date(blog.publishedAt).toLocaleDateString()}
                    commentsCount={blog.comments || 0}
                    title={blog.title}
                    description={blog.excerpt}
                    buttonLabel="Read More"
                    onButtonClick={() => handleReadMore(blog.id)}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-end w-full">
                <div className="flex justify-end" style={{ justifyContent: 'flex-end !important' }}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={3}
                    onPageChange={handlePageChange}
                    showInfo={false}
                    className="!justify-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
