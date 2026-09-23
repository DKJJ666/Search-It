import express from "express"
import cors from "cors"
import reciboRoutes from './routes/reciboRoutes.js' 

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());


app.use('/recibos', reciboRoutes);


export default app;
