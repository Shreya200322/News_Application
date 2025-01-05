import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ArticleGrid from './components/ArticleGrid';
import FeaturedArticle from './components/FeaturedArticle';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { Category } from './types';
import { useArticles } from './hooks/useArticles';
import { useSearch } from './hooks/useSearch';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, loading, error } = useArticles(selectedCategory);
  const searchResults = useSearch(articles, searchTerm);

  const featuredArticle = articles[0];
  const remainingArticles = searchResults.slice(1);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        {error && <ErrorMessage message={error} />}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {featuredArticle && searchTerm === '' && (
              <FeaturedArticle article={featuredArticle} />
            )}
            <ArticleGrid articles={searchTerm === '' ? remainingArticles : searchResults} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;