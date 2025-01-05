import React from 'react';
import { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative h-[500px] w-full mb-8 rounded-xl overflow-hidden group">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-blue-600 rounded-full">
            {article.category}
          </span>
          <h1 className="text-4xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
            {article.title}
          </h1>
          <p className="text-lg text-gray-200 mb-2">{article.content.substring(0, 150)}...</p>
          <div className="flex items-center text-sm text-gray-300">
            <span className="mr-4">{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}