import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BlogCardHorizontal from "../../components/Blog/BlogCardHorizontal";
import BlogCardVertical from "../../components/Blog/BlogCardVertical";
import Button from "../../components/Button/Button";
import { Calendar, MessageSquare, ArrowLeft, User, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import { blogPosts, relatedPosts, recentPosts, galleryImages } from "../../data/index";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);
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

  if (!post) {
    return (
      <>
        <CandidateHeader />
        <main className="bg-gray-50 min-h-screen">
          <div className="container mx-auto py-12 md:py-20 px-4 md:px-6 lg:px-0 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
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

  const related = relatedPosts(post.id, post.category, 4);

  return (
    <>
      <CandidateHeader />
      
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb title={post.title} />

        {/* Main Content */}
        <div className="container mx-auto py-6 md:py-8 px-4 md:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Content - Full width on mobile, 8 columns on desktop */}
            <div className="lg:col-span-8 order-1">
              {/* Blog Article */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
                {/* Article Header */}
                <div className="mb-6 md:mb-8">
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      {post.commentsCount || 0} comments
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} />
                      {post.author?.name || "Admin"}
                    </span>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                    {post.title}
                  </h1>
                  
                                     {post.excerpt && (
                     <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                       {post.excerpt}
                     </p>
                   )}
                   
                   {/* Tags */}
                   {post.tags && post.tags.length > 0 && (
                     <div className="flex flex-wrap gap-2 mt-4">
                       {post.tags.map((tag, index) => (
                         <span
                           key={index}
                           className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full hover:bg-primary-200 transition-colors cursor-pointer"
                         >
                           #{tag}
                         </span>
                       ))}
                     </div>
                   )}
                 </div>

                {/* Article Image */}
                {post.image && (
                  <div className="mb-6 md:mb-8">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-900 font-medium whitespace-nowrap">
                      Share this post:
                    </span>

                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-blue-600 border-blue-100 hover:bg-blue-50 transition">
                      <Facebook size={16} />
                      Facebook
                    </button>

                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-sky-500 border-blue-100 hover:bg-blue-50 transition">
                      <Twitter size={16} />
                      Twitter
                    </button>

                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-blue-700 border-blue-100 hover:bg-blue-50 transition">
                      <Linkedin size={16} />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                  Comments ({comments.length})
                </h3>
                
                {/* Comment Form */}
                <div className="mb-6">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <div className="mt-3 flex justify-end">
                    <Button
                      onClick={handlePostComment}
                      variant="primary"
                      size="medium"
                      rightIcon={Send}
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-l-4 border-primary-500 pl-4">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <User size={16} className="text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">{comment.author}</span>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                      
                      {/* Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-8 mt-4 space-y-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="border-l-2 border-gray-200 pl-4">
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                  <User size={14} className="text-gray-600" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-gray-900">{reply.author}</span>
                                    <span className="text-sm text-gray-500">{reply.date}</span>
                                  </div>
                                  <p className="text-gray-700">{reply.content}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Full width on mobile, 4 columns on desktop */}
            <div className="lg:col-span-4 order-2">
              {/* Recent Posts */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6 mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 3).map((recentPost) => (
                    <BlogCardHorizontal
                      key={recentPost.id}
                      variant="compact"
                      image={recentPost.image}
                      date={recentPost.date}
                      commentsCount={recentPost.commentsCount}
                      title={recentPost.title}
                      onButtonClick={() => handleReadMore(recentPost.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  Gallery
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {galleryImages.slice(0, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-20 md:h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section - Below main content, above footer */}
        <div className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((relatedPost) => (
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

