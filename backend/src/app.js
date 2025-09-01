const express = require('express');
const app = express();
console.log('=============================');
const UserRoutes = require('./router/UserRoutes');
console.log('=============================');


app.use(express.json());
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/users', UserRoutes);

module.exports = app;