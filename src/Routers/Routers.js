import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Components/Pages/Checkout/Checkout";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Registration from "../Components/Pages/Registration/Registration";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {path: '/', element:<Home/>},
            {path: '/home', element: <Home></Home>},
            {path: '/login', element: <Login></Login>},
            {path: '/registration', element: <Registration></Registration>},
            {path: '/checkout/:id', loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`), element:<Checkout></Checkout>}
        ]
    }
])