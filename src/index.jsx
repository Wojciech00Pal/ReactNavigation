import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './layout/header';
import BodyPage from './layout/BodyPage';
import NotFound from './layout/NotFound';
import Navbar from './layout/navbar';
import People from './layout/People';
import Fantasify from './layout/Fantasify';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
 <BrowserRouter>
   <Header/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<BodyPage />}></Route>
    <Route path='/people' element={<People/>}></Route>
    <Route path='/NotFound' element={<NotFound />}></Route>
    <Route path='/Fantasify' element={<Fantasify />}></Route>

   </Routes>
 </BrowserRouter>
 </React.StrictMode>
);
