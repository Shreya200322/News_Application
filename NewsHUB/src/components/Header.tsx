import React from 'react';
import { Newspaper } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: Category[] = ['All', 'Technology', 'Politics', 'Sports', 'Entertainment', 'Science'];

export default function Header({ selectedCategory, onCategoryChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">NewsHub</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}