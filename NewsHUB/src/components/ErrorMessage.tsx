import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-50 text-red-700 rounded-lg">
      <AlertCircle className="h-5 w-5 mr-2" />
      <span>{message}</span>
    </div>
  );
}