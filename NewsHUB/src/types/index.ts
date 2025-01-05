export interface Article {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
}

export type Category = 'All' | 'Technology' | 'Politics' | 'Sports' | 'Entertainment' | 'Science';