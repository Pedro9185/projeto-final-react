import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
import axios from 'axios';
<<<<<<< HEAD
import UserRoutes from "./router/UserRoutes";
import TradeRoutes from "./router/TradeRoutes";
import ProductRoutes from "./router/productRoutes";
=======
const UserRoutes = require('./router/UserRoutes');
const TradeRoutes = require('./router/TradeRoutes');
const categoriaRoutes = require('./router/categoriaRoutes');
>>>>>>> 8d60c76a27118221c20a20099d10c9e6ac90141c

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
<<<<<<< HEAD
app.use("/products", ProductRoutes);
=======
app.use('/categorias', categoriaRoutes);

>>>>>>> 8d60c76a27118221c20a20099d10c9e6ac90141c
module.exports = app;