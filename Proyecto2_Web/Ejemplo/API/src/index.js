//se importan todas las librerías
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import handleRouter from './routes/data.routes.js'; //se importa el router

//creación de Endpoints (peticiones)
const app = express(); //se instancia una variable a la clase express

app.use(express.json()); //se le dice a express que use JSON para las peticiones 
app.use(morgan('dev')); //se le dice a express que use morgan para mostrar mensajes en consola //dev es un formato de morgan para mostrar mensajes
app.use(cors()); //se le dice a express que use cors para evitar problemas de CORS //cors sirve para regular las peticiones que se hacen a un servidor

app.use(handleRouter); //se le dice a express que utilice los routers

app.listen(3000) //Se abre un servidor en el puerto "3000"

console.log('Servidor levantado en el lugar: http://localhost:3000' );

//nodemon sirve para que el servidor se reinicie automáticamente cada vez que se haga un cambio en el código



