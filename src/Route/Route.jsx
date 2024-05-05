import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../SignUp/SingUp";
import CheckOut from "../Pages/Home/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:`/checkout/:id`,
                element:<PrivateRoute><CheckOut/></PrivateRoute>,
                loader:({params})=>fetch(`https://cars-doctor-server-eta.vercel.app/services/${params.id}`)
            },
            {
                path:"/booking",
                element:<PrivateRoute><Booking/></PrivateRoute>
            },
            ,
            {
                path:"/login",
                element:<Login/>
            }
            ,
            {
                path:"/signUp",
                element:<SingUp/>
            }
        ]
    }
])

export default router