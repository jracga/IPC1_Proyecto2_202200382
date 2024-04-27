import { useEffect } from "react"; //useEffect es un hook que se ejecuta después de que se renderiza el componente
import { createBrowserRouter } from "react-router-dom"; //importa la función createBrowserRouter de react-router-dom
import { useUser } from "../context/User"; // importa la función useUser del archivo User.jsx
import LayoutUser from "../Layouts/LayoutUser"; //importa el componente LayoutUser
import Home from "../pages/Home"; //importa el componente Home
import Login from "../pages/Login"; //importa el componente Login
import Registro from "../pages/Registro"; //importa el componente Registro

const PrivateRoute = () => { //ruta privada
    const { user } = useUser();

    useEffect(() => {
        if(user === null){
            window.location.href = '/'; //si el usuario no está logueado, lo redirige al login
        }
    }, [user]);
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path:'/registrar',
        element: <Registro />
    },
    {
        path:'/user',
        element: <LayoutUser/>,
        children:[
            {
                path:'home',
                element: <Home />
            }
        ]
    }
]);