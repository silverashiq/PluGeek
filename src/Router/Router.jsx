import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import GamePage from "../Pages/GamePage";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import SingleGame from "../Pages/SingleGame";
import App from "../App";



export const myRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/",
                element:<HomePage/>,
            },

            {
                path:"/games",
                element:<GamePage/>,
            },

            {
                path:"/about",
                element:<AboutUs/>,
            },

            {
                path:"/contact",
                element:<ContactUs/>,
            },

            {
                path:"/login",
                element:<LogIn/>,
            },

            {
                path:"/signup",
                element:<SignUp/>,
            },

            {
                path:"/:id",
                element:<SingleGame/>,
            },
        ]
    }
])