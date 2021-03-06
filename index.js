const express = require('express');
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(require('./src/routes'))

const server = http.createServer(app);

server.listen(app.get('port'));