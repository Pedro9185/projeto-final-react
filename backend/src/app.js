import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
import axios from 'axios';
import UserRoutes from "./router/UserRoutes";
import TradeRoutes from "./router/TradeRoutes";
import ProductRoutes from "./router/productRoutes";

app.use(cors({
  origin: 'http://localhost:5173', // Permite requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

app.use(axios(
  { baseURL: 'http://localhost:3000' }
))

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/users', UserRoutes);
app.use('/trades', TradeRoutes);
app.use("/products", ProductRoutes);
module.exports = app;