import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import { userRoute } from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/api/v1', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});