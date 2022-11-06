import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Components/Pages/Checkout/Checkout";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Orders from "../Components/Pages/Orders/Orders";
import Registration from "../Components/Pages/Registration/Registration";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/registration', element: <Registration></Registration> },
            { path: '/checkout/:id', loader: ({ params }) => fetch(`https://car-doctor-server-hazel.vercel.app/services/${params.id}`), element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes> },
            { path: '/orders', element: <PrivateRoutes><Orders></Orders></PrivateRoutes> }
        ]
    }
])