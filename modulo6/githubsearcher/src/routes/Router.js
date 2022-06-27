import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Detailpage } from '../pages/DetailPage/DetailPage';
import { Homepage } from '../pages/HomePage/Homepage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/user/:name" element = {<Detailpage/>} />     
      </Routes>
    </BrowserRouter>
  );
}

export default Router;