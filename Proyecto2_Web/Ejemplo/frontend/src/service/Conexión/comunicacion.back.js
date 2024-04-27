// primero se importó la librería axcess para hacer las peticiones al servidor, usando la terminal 
// npm install axios
//sirve para hacer peticiones http al servidor (backend)

import axios from 'axios'; //para hacer peticiones http al servidor (backend)
const instance = axios.create( //crea una instancia de axios
    {
    baseURL: "http://localhost:3000/", //url del servidor
} 
);

export const crearUsuario = async (user_data) => { //función para crear un usuario
    const response = await instance.post(  //peticion post al servidor
        "/crear", //ruta del servidor
        user_data,
        { //Json
            headers: { //cabecera de la petición 
                'Content-Type': 'application/json', //tipo de contenido que se envía en la petición
            }
        }
    ); 

    return response.data; //retorna la respuesta del servidor
}
