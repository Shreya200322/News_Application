import { useState, useMemo } from 'react';
import { Article } from '../types';

export const useSearch = (articles: Article[], searchTerm: string) => {
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return articles;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return articles.filter(article => 
      article.title.toLowerCase().includes(lowercaseSearch) ||
      article.content.toLowerCase().includes(lowercaseSearch) ||
      article.author.toLowerCase().includes(lowercaseSearch) ||
      article.category.toLowerCase().includes(lowercaseSearch)
    );
  }, [articles, searchTerm]);

  return searchResults;
};