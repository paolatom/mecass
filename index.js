const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

//configuraciones de express
app.set('port',5000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

//Middleware o intermediarios
//app.use(morgan ('desarrollo'));

//Rutas
//app.get('/',(req,res)=>{
	app.use(require('./routes'));
//});

//Archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//servidor escuchando peticiones
app.listen(app.get('port'),()=> {
	console.log('Servidor en puerto',app.get('port'));
});