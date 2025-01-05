import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
          {article.category}
        </span>
        <h2 className="mt-2 text-xl font-semibold text-gray-900 line-clamp-2">
          {article.title}
        </h2>
        <p className="mt-2 text-gray-600 line-clamp-3">{article.content}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <User className="h-4 w-4 mr-1" />
          <span className="mr-4">{article.author}</span>
          <Calendar className="h-4 w-4 mr-1" />
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}