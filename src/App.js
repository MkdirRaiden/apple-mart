import { About, Contact, Header, Home, Product, ProductDetail, Cart, Checkout } from "./components"
import { Routes, Route, Navigate } from "react-router-dom"

import "./App.css"

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
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
