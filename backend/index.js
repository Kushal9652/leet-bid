import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


connectDB(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));


app.use(express.json());

// // Router Registrations
// app.use("/api/users", userRouter);