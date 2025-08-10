import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BlogCardHorizontal from "../../components/Blog/BlogCardHorizontal";
import BlogCardVertical from "../../components/Blog/BlogCardVertical";
import NavigationButton from "../../components/Button/NavigationButton";
import Button from "../../components/Button/Button";
import { Calendar, MessageSquare, Heart, ArrowLeft, ArrowRight, Share2, Bookmark, User, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import { blogPosts, relatedPosts, recentPosts, galleryImages } from "../../data/index";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [comment, setComment] = useState("");

  // Mock comments data
  const comments = [
    {
      id: 1,
      author: "John Doe",
      date: "Dec 10, 2024",
      content: "Great article! Very insightful and well-written.",
      replies: [
        {
          id: 2,
          author: "Jane Smith",
          date: "Dec 11, 2024",
          content: "I agree! Thanks for sharing your thoughts."
        }
      ]
    },
    {
      id: 3,
      author: "Mike Johnson",
      date: "Dec 12, 2024",
      content: "This helped me understand the topic much better. Thank you!",
      replies: []
    }
  ];

  const handleReadMore = (id) => {
    // Find the blog post to get its slug
    const blog = blogPosts.find(post => post.id === id) || 
                 relatedPosts(post?.id || 1, post?.category || "").find(post => post.id === id) ||
                 recentPosts.find(post => post.id === id);
    if (blog && blog.slug) {
      navigate(`/blog/${blog.slug}`);
    }
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      // Handle comment submission
      console.log("Posting comment:", comment);
      setComment("");
    }
  };

  const nextSlide = () => {
    const related = relatedPosts(post?.id || 1, post?.category || "");
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, related.length - 2));
  };

  const prevSlide = () => {
    const related = relatedPosts(post?.id || 1, post?.category || "");
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, related.length - 2)) % Math.max(1, related.length - 2));
  };

  if (!post) {
    return (
      <>
        <CandidateHeader />
        <main className="bg-gray-50 min-h-screen">
          <div className="container py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = relatedPosts(post.id, post.category);

  return (
    <>
      <CandidateHeader />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.category, href: `/blog/category/${post.categorySlug}` },
                { label: post.title }
              ]}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content - 8 columns */}
            <div className="col-span-12 lg:col-span-8">
              {/* Blog Header */}
              <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
                <div className="flex items-center gap-4 text-body-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{comments.length} Comments</span>
                  </div>
                </div>
                
                <h1 className="text-heading-01 font-semibold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-body-sm text-gray-500">{post.author.title}</p>
                  </div>
                </div>

                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              </div>

              {/* Blog Content */}
              <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-medium prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Share This Post */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                  Share This Post
                </h3>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-100 text-blue-600 hover:bg-blue-50 transition-colors">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-sky-100 text-sky-500 hover:bg-sky-50 transition-colors">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-50 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* Write a Comment */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-4">
                  Write a Comment
                </h3>
                <div className="space-y-4">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                    className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Button
                    variant="primary"
                    size="medium"
                    rightIcon={Send}
                    onClick={handlePostComment}
                    disabled={!comment.trim()}
                  >
                    Post a Comment
                  </Button>
                </div>
              </div>

              {/* Comments */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
                <h3 className="text-heading-05 font-semibold text-gray-900 mb-6">
                  Comments ({comments.length})
                </h3>
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium text-gray-900">{comment.author}</h4>
                            <span className="text-body-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700 mb-3">{comment.content}</p>
                          <button className="text-body-sm text-primary-600 hover:text-primary-700 font-medium">
                            Reply
                          </button>
                          
                          {/* Replies */}
                          {comment.replies.length > 0 && (
                            <div className="mt-4 ml-6 space-y-4">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex items-start gap-3">
                                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-gray-600" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h5 className="font-medium text-gray-900 text-body-sm">{reply.author}</h5>
                                      <span className="text-body-xs text-gray-500">{reply.date}</span>
                                    </div>
                                    <p className="text-gray-700 text-body-sm">{reply.content}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 4 columns */}
            <div className="col-span-12 lg:col-span-4">
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
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-heading-01 font-semibold text-gray-900">Related Blogs</h2>
              <div className="flex items-center gap-2">
                <NavigationButton 
                  direction="left" 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  active={currentSlide > 0}
                />
                <NavigationButton 
                  direction="right" 
                  onClick={nextSlide}
                  disabled={currentSlide >= related.length - 3}
                  active={currentSlide < related.length - 3}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.slice(currentSlide, currentSlide + 3).map((relatedPost) => (
                <BlogCardVertical
                  key={relatedPost.id}
                  image={relatedPost.image}
                  title={relatedPost.title}
                  description={relatedPost.excerpt}
                  onButtonClick={() => handleReadMore(relatedPost.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogDetail;

