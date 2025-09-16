const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
import axios from 'axios';
const UserRoutes = require('./router/UserRoutes');
const TradeRoutes = require('./router/TradeRoutes');
const categoriaRoutes = require('./router/categoriaRoutes');

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
app.use('/categorias', categoriaRoutes);

module.exports = app;