import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { Calendar, Eye, Heart, ArrowLeft, ArrowRight, Share2, Bookmark, User } from "lucide-react";
import { blogPosts, relatedPosts } from "../data/index";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
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
      </>
    );
  }

  const related = relatedPosts(post.id, post.category);

  return (
    <>
      <Header />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-100">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary-600">Blog</Link>
              <span>/</span>
              <Link to={`/blog/category/${post.categorySlug}`} className="hover:text-primary-600">
                {post.category}
              </Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="bg-white">
          <div className="container py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-12 transition-colors text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back to Articles
              </Link>

              {/* Category */}
              <Link 
                to={`/blog/category/${post.categorySlug}`}
                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors mb-6 block"
              >
                {post.category}
              </Link>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 pb-8 border-b border-gray-100">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.title}</p>
                  </div>
                </div>

                {/* Article Meta */}
                <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6 mb-12">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Share2 size={18} />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Bookmark size={18} />
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-gray-50">
          <div className="container py-16">
            <div className="max-w-3xl mx-auto">
              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-medium prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-gray-900 prose-a:underline prose-strong:text-gray-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="bg-white py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm hover:bg-gray-200 transition-colors cursor-pointer font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="bg-white border-t border-gray-100">
          <div className="container py-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-medium text-gray-600">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{post.author.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">{post.author.title}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {post.author.name} is a seasoned professional with extensive experience in career development and human resources. 
                    They regularly share insights on job searching, career advancement, and workplace trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-light text-gray-900 mb-12">More in {post.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {related.map((relatedPost) => (
                    <article key={relatedPost.id} className="group bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300">
                      <div className="p-6">
                        <Link 
                          to={`/blog/category/${relatedPost.categorySlug}`}
                          className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors mb-4 block"
                        >
                          {relatedPost.category}
                        </Link>
                        <h3 className="font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-mono pt-4 border-t border-gray-100">
                          <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="bg-white border-t border-gray-100 py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-light text-gray-900 mb-4">Stay in the Loop</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get weekly career insights and industry updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border border-gray-200">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-4 border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500"
                />
                <button className="px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium border-l border-gray-200">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetail;
