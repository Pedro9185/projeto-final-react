import express from "express";
const app = express();
const cors = require('cors');

const UserRoutes = require('./router/UserRoutes');
const TradeRoutes = require('./router/TradeRoutes');
const categoriaRoutes = require('./router/categoriaRoutes');

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173/', // Permite requisições do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));
app.use(express.json()); // Para o Express entender requisições com corpo em JSON

// Rota de teste
app.get('/', (req, res) => {
    res.send('API is running');
});

// Rotas da sua aplicação
app.use('/users', UserRoutes);
app.use('/trades', TradeRoutes);

app.use("/products", ProductRoutes);

app.use('/categorias', categoriaRoutes);

module.exports = app;