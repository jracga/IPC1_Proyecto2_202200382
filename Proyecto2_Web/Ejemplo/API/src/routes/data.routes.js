
import {Router} from 'express';
import { getHome, createUser,verUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/data.controllers.js'

const router = Router();

router.get('/', getHome); //utiliza método getHome  de data.controllers.js  //muestra un mensaje de bienvenida 
router.post('/create', createUser); //utiliza método createUser de data.controllers.js  //se crea un usuario
router.get('/ver', verUsuario); //utiliza método verUsuarios de data.controllers.js   //se ven los usuarios
router.put('/editar', actualizarUsuario); //utiliza método actualizarUsuario de data.controllers.js     //se actualiza un usuario
router.delete('/eliminar/:username', eliminarUsuario); //utiliza método eliminarUsuario de data.controllers.js    //se elimina un usuario    

export default router; //exporta el router para que pueda ser utilizado en otros archivos de JS



