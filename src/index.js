import * as dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import { connectDB } from './config/dbConfig.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.SERVER_PORT, () => {connectDB()});
