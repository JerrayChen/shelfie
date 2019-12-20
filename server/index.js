require('dotenv').config();
const express = require('express');
const app = express();
const { SERVER_PORT, DATABASE_URI } = process.env;
const massive = require('massive');
const { getProducts, getProduct, addProduct, deleteProduct, updateProduct } = require('./controller');

app.use(express.json());

massive(DATABASE_URI).then((db)=>{
    console.log("Database connected");
    app.set('db',db);
})

app.get('/api/inventory', getProducts);
app.get('/api/product/:id', getProduct);
app.post('/api/product', addProduct);
app.delete('/api/product/:id', deleteProduct);
app.put('/api/product/:id', updateProduct);

app.listen(SERVER_PORT, () => {console.log("Server is listening port", SERVER_PORT);});