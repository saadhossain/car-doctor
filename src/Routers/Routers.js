import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {path: '/', element:<Home/>},
            {path: '/home', element: <Home></Home>},
            {path: '/login', element: <Login></Login>}
        ]
    }
])