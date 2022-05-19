import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ProductsRoutes from './routes/productsRoutes';
import UserRoutes from './routes/userRoutes';
import 'dotenv/config'

require('dotenv').config();
const app = express();

//Port settings
app.set('port',process.env.PORT);
app.set("view engine", "ejs");

//Middlewares used
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.use('/api/products',ProductsRoutes); //Goes to products
app.use('/api/users',UserRoutes); //Goes to users

export default app;