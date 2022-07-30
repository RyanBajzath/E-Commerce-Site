import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from './AboutUs';

const App = () => {

return (
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={ "Homepage"}/>
      <Route path = "/shop" element={ "Shop"}/>
      <Route path = "/item/:itemId" element={ "Item"}/>
      <Route path = "/checkout" element={ "Checkout"}/>
      <Route path = "/category/:categoryId" element={ "Category"}/>
      <Route path = "/company/:companyId" element={ "Company"}/>
      <Route path = "/previous-purchases" element={ "Previous purchases"}/>
      <Route path = "/about-us" element={<AboutUs/>}/>
      </Routes>
  </BrowserRouter>
);
};

export default App;