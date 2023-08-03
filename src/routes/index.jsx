import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Home } from "../pages/Home";
/* import { NotFound } from "../pages/NotFound"; */

export const AppRoutes = ()=>{
    return(
      
            <Routes>

<Route path="/Spoktify/" element={<Home/>}/>



            </Routes>

           
    )
}