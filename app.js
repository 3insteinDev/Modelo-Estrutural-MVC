const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let porta = 8000;

app.listen(porta, ()=>{
	console.log('Servidor em execução na porta '+ porta);
	console.log('localhost:8000')
})
