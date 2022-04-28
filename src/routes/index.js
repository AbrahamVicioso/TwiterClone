const express = require('express')
const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('hola2')
})

module.exports = routes;