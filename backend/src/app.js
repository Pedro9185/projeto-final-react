const express = require('express');
const app = express();
const UserRoutes = require('./router/UserRoutes');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/users', UserRoutes);

module.exports = app;