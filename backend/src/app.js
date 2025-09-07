const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const UserRoutes = require('./router/UserRoutes');
const TradeRoutes = require('./router/TradeRoutes');

app.use(cors({
  origin: 'http://localhost:5173', // Permite requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/users', UserRoutes);
app.use('/trades', TradeRoutes);

module.exports = app;