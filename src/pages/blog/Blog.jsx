import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BlogCardHorizontal from "../../components/Blog/BlogCardHorizontal";
import KeywordInput from "../../components/InputField/KeywordInput";
import LabelTag from "../../components/Label/LabelTag";
import Pagination from "../../components/Button/Pagination";
import { Search } from "lucide-react";
import { blogPosts, recentPosts, galleryImages } from "../../data/index";

export default function Blog() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Custom breadcrumbs for blog
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' }
  ];

  // Add category to breadcrumbs if viewing a specific category
  if (categorySlug) {
    const category = categories.find(cat => cat.id === categorySlug);
    if (category) {
      breadcrumbs.push({ label: category.name, path: `/blog/category/${categorySlug}` });
    }
  }

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



  const handleReadMore = (blogId) => {
    // Find the blog post to get its slug
    const blog = blogPosts.find(post => post.id === blogId);
    if (blog) {
      navigate(`/blog/${blog.slug}`);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <CandidateHeader />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-heading-01 font-semibold text-gray-900 mb-4">
                Career Insights & Job Market Trends
              </h1>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                Stay ahead in your career with expert advice, industry insights, and practical tips 
                for job seekers and professionals at every stage of their journey.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - 8 columns */}
            <div className="lg:col-span-8">
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
              <div className="mt-12 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={3}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            {/* Sidebar - 4 columns */}
            <div className="lg:col-span-4">
              {/* Search Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8">
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

              {/* Categories Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8">
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

              {/* Recent Posts Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8">
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

              {/* Gallery Block */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                  Gallery
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.map((image, index) => (
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
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
