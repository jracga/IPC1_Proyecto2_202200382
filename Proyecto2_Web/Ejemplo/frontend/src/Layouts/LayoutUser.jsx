import { Outlet } from "react-router-dom";

const LayoutUser = () => {
    return (
        <div>
            <Outlet /> //se renderiza el contenido de la página
        </div>
    );
}

export default LayoutUser;