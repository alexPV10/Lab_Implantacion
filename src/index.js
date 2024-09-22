const express = require('express');

const app = express();

require('dotenv').config()

app.set('port', process.env.PORT || 4500);

app.listen(app.get('port'), () =>{
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
});