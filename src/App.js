import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import Home from "./home/Home";
import Portofolio from "./portfolio/Portofolio";
import About from "./about/About";
import Contact from "./contact/Contact";
import Notfound from "./notfound/Notfound";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from "./layout/Layout"
let routes= createBrowserRouter([
  {path: '/' ,element: <Layout></Layout> ,children:[
    {index:true,element:<Home></Home>},

{path:'portofolio',element: <Portofolio></Portofolio>},
{path:'Contact',element:<Contact></Contact>},
{path:'About',element: <About></About>},

  ] }
])
function App() {

  return (<>
<RouterProvider router={routes}></RouterProvider>
 </>
 
  );
}

export default App;