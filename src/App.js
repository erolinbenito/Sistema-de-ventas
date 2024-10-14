import React, { useState } from "react";
import Navigation from "./componentes/Navigation";
import Services from "./componentes/Services";
import Products from "./componentes/Products";
import Cart from "./componentes/Cart";
import Footer from "./componentes/Footer";
import "./App.css";
import Header from "./componentes/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.serviceId !== item.serviceId));
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Services
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Products
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
      <Cart
        cartItems={cartItems}
        isOpen={isCartOpen}
        openCart={openCart}
        closeCart={closeCart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
