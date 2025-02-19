import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import catalogRoutes from './catalog/catalog.routes';

const app: Express = express();
const port = process.env.PORT || 3000;
const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

mongoose
  .connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/catalog', catalogRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
