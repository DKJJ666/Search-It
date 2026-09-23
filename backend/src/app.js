import express from "express"
import cors from "cors"
import reciboRoutes from './routes/reciboRoutes.js' 

const app = express();



app.use(express.json());


app.use('/recibos', reciboRoutes);


export default app;