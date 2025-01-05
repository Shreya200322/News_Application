import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://shreya2203:shreya2203@cluster0.sxa7c.mongodb.net/newsapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Article Schema
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  category: String,
  author: String,
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

// Routes
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/articles', async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});