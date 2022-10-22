import { createBrowserRouter } from "react-router-dom";
import Book from "../../components/Book/Book";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/book',
                element:<Book></Book>
            }
            
        ]
    }
])