const express = require('express');
const app = express();
const UserRoutes = require('./router/UserRoutes');
const TradeRoutes = require('./router/TradeRoutes');
const categoriaRoutes = require('./router/categoriaRoutes');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/users', UserRoutes);
app.use('/trades', TradeRoutes);
app.use('/categorias', categoriaRoutes);
module.exports = app;