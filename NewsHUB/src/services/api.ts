import axios from 'axios';
import { Article } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles`);
    return response.data;
  } catch (error) {
    // Properly handle the error without trying to clone symbols
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch articles: ${error.message}`);
    }
    throw new Error('Failed to fetch articles');
  }
};