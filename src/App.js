import { About, Contact, Header, Home, Product, ProductDetail, Cart, Checkout } from "./components"
import { Routes, Route, Navigate } from "react-router-dom"
import Aos from "aos";
import { useEffect } from "react";


import "./App.css"

function App() {
    useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 100,
      offset: 25,
    });
  }, []);
 
  return (
    <>
      <Header/>
      <Routes basename="/apple-mart">
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
 
}
 

export default App;
