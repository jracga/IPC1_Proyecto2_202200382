import { listaUsuarios } from "../constants/constantes.js"
import { Usuario } from "../models/Usuario.js"

export const getHome = (req, res) => { //mostrar un mensaje  //req=request, res=response
    console.log('mensaje random')
    res.send({
        mensaje: "Bienvenido a la API de la aplicación de ejemplo usando NodeJS y Express en IPC1"
    })
}

//CREAR USUARIO
export const createUser = (req, res) => {
    const { username, password, nombre, edad } = req.body; //se obtienen los datos del body
    const newUser = new Usuario(username, password, nombre, edad); //se crea un nuevo usuario (creación de objeto en JS), con sus parámetros
    listaUsuarios.push(newUser); //se agrega a la lista de usuarios
    res.send({
        status: true,
        mensaje: "Usuario creado exitosamente",
    })
}

//VER USUARIOS
export const verUsuario = (req, res) => {
    res.send({
        status: true,
        usuarios: listaUsuarios
    })
}

//ACTUALIZAR USUARIO    
export const actualizarUsuario = (req, res) => {
    const { username, password, nombre, edad } = req.body; //se obtienen los datos del body
    let existe = false; //se crea una variable booleana
    for(let i =0;i<listaUsuarios.length;i++){
        if(listaUsuarios[i].username() === username){
            listaUsuarios[i].password = password;
            listaUsuarios[i].nombre = nombre; 
            listaUsuarios[i].edad = edad;
            res.send({
                status: true,
                mensaje: "Usuario actualizado exitosamente"
            })
            }
        }
        res.send({
            status: false,
            mensaje: "Usuario no encontrado"
        })  
    }

    export const eliminarUsuario = (req, res) => {
        const {username} = req.params;
        for(let i =0; i<listaUsuarios.length;i++){
            if(listaUsuarios[i].username() === username){
                listaUsuarios.splice(i,1);
                res.send({
                    status: true,
                    mensaje: "Usuario eliminado exitosamente"
                })
            }
        }
        res.send({
            status: false,
            mensaje: "Error: Usuario no encontrado"
        })
    }
