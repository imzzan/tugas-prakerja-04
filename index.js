const express = require('express');
const userRoutes = require('./src/routes/user.js')
require('dotenv').config()

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', userRoutes)

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})