import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Compo/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Tokens from "./pages/Tokens";
import Contact from "./pages/Contact";
import Login from "./Compo/Login";
import Register from "./Compo/Register";
import VIP from "./Compo/Vip";
import Face from "./Compo/Face";

const Layout = ()=>{
  const location = useLocation();
  return (
    <>
    {location.pathname === '/' && <Navbar/>}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/faceai" element={<Face />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

    </>
  );
};


const App = () => {
  return (
    <HashRouter>

    <Layout/>

    </HashRouter>
  );
};

export default App;



// import React from 'react'
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Navbar from './Compo/Navbar' 
// import About from './pages/About';
// import Register from './Compo/Register';
// import Features from './pages/Features';
// import Tokens from './pages/Tokens';
// import Contact from './pages/Contact';
// import Login from "./Compo/Login";
// import Home from "./Compo/Navbar";
// import VIP from "./Compo/Vip";
// import Face from "./Compo/Face";

// const router = createBrowserRouter(
//   [
//     {
//         path: '/',
//         element: <Navbar/>
//     },
//     {
//         path: '/',
//         element: <Home/>
//     },
//     {
//         path: "/vip",
//         element: <VIP/>
//     },
//      {
//         path: "/faceai",
//         element: <Face/>
//     },
//      {
//         path: '/about',
//         element: <About/>
//     },
//      {
//         path: '/features',
//         element: <Features/>
//     },
//      {
//         path: '/tokens',
//         element: <Tokens/>
//     },
//      {
//         path: '/contact',
//         element: <Contact/>
//     },
//     {
//         path: '/login',
//         element: <Login/>
//     },
//     {
//         path: '/register',
//         element: <Register/>
//     }
    
//   ]
// )

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   )
// }

// export default App