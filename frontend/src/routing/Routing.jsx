import React from 'react';
import Card from '../components/productCard/Card';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Navbar from '../components/navbar/Navbar';
import ProductScreen from '../components/productScreen/ProductScreen';

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:slug" element={<ProductScreen />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
