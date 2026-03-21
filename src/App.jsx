import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './Compo/Navbar' 
import About from './pages/About';
import Register from './Compo/Register';
import Features from './pages/Features';
import Tokens from './pages/Tokens';
import Contact from './pages/Contact';
import Login from "./Compo/Login";
import Home from "./Compo/Navbar";
import VIP from "./Compo/Vip";
import Face from "./Compo/Face";

const router = createBrowserRouter(
  [
    {
        path: '/',
        element: <Navbar/>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/vip",
        element: <VIP/>
    },
     {
        path: "/faceai",
        element: <Face/>
    },
     {
        path: '/about',
        element: <About/>
    },
     {
        path: '/features',
        element: <Features/>
    },
     {
        path: '/tokens',
        element: <Tokens/>
    },
     {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
    
  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App