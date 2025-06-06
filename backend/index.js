import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Register user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

connectDB(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error", err));

