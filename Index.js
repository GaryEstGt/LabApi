const express = require('express');
const bodyParser = require('body-parser');
// initialize express app
const app = express();
let port = 1234;

app.listen(port, () => {
    console.log('Servidor Iniciado en el puerto: n' + port);
});