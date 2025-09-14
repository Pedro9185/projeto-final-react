const express = require('express');
const app = express();
const app = require('cors')();
const UserRoutes = require('./router/UserRoutes');
const TradeRoutes = require('./router/TradeRoutes');

=======
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/users', UserRoutes);
app.use('/trades', TradeRoutes);
module.exports = app;