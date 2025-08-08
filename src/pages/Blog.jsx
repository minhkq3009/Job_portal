import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { Search, Calendar, Eye, Heart, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "../data/index";

const BlogCard = ({ post, featured = false }) => {
  const categoryColors = {
    'career-tips': 'from-blue-50 to-blue-100 border-blue-200',
    'interview-guide': 'from-green-50 to-green-100 border-green-200',
    'resume-writing': 'from-purple-50 to-purple-100 border-purple-200',
    'industry-insights': 'from-orange-50 to-orange-100 border-orange-200',
    'remote-work': 'from-indigo-50 to-indigo-100 border-indigo-200',
    'salary-negotiation': 'from-red-50 to-red-100 border-red-200',
    'professional-development': 'from-teal-50 to-teal-100 border-teal-200'
  };

  const categoryColor = categoryColors[post.categorySlug] || 'from-gray-50 to-gray-100 border-gray-200';

  return (
    <article className={`group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      {/* Subtle Featured Indicator */}
      {post.featured && (
        <div className="absolute top-0 left-0 w-1 h-full bg-gray-900"></div>
      )}
      
      {/* Minimalist Header */}
      <div className={`bg-gradient-to-r ${categoryColor} p-6 border-b border-gray-100`}>
        <div className="flex items-start justify-between mb-4">
          <Link 
            to={`/blog/category/${post.categorySlug}`}
            className="text-xs font-mono uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
          >
            {post.category}
          </Link>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{post.views.toLocaleString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Clean Typography */}
        <h2 className={`font-medium text-gray-900 leading-tight group-hover:text-gray-700 transition-colors ${featured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
          <Link to={`/blog/${post.slug}`} className="block">
            {post.title}
          </Link>
        </h2>
      </div>
      
      <div className="p-6">
        {/* Excerpt with better spacing */}
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Minimal Author Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
          
          {/* Subtle engagement */}
          <div className="flex items-center gap-1 text-gray-400">
            <Heart size={14} className="group-hover:text-red-400 transition-colors" />
            <span className="text-xs">{post.likes}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="border-b border-gray-100 mb-12">
      <div className="flex flex-wrap gap-0 -mb-px">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
            activeCategory === 'all'
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeCategory === category.slug
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs text-gray-400">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-lg mx-auto">
      <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search articles, topics, or keywords..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-0 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 text-gray-900 placeholder-gray-500"
      />
    </div>
  );
};

export default function Blog() {
  const { categorySlug } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Set active category from URL params
  useEffect(() => {
    if (categorySlug) {
      setActiveCategory(categorySlug);
    } else {
      setActiveCategory('all');
    }
  }, [categorySlug]);

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.categorySlug === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Header />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4 block">
                  Career Development Hub
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                  Insights for Your
                  <span className="block font-medium">Career Journey</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                Expert advice, industry insights, and practical strategies to accelerate your professional growth.
              </p>
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="bg-white py-16 md:py-20">
          <div className="container max-w-7xl">
            {/* Category Filter */}
            <CategoryFilter 
              categories={blogCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Results Count */}
            <div className="mb-12">
              <p className="text-sm text-gray-500 font-mono">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
                {activeCategory !== 'all' && ` in ${blogCategories.find(cat => cat.slug === activeCategory)?.name}`}
              </p>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && activeCategory === 'all' && !searchTerm && (
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {featuredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} featured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">No articles found</h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Try adjusting your search terms or explore different categories to discover relevant content.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium"
                >
                  View All Articles
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
