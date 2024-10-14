// src/components/Products.js
import React from 'react';
import ProductCard from './ProductCard';
import alimentoPremium from '../imagenes/alimento-premium.jpg'
import camaMascota from '../imagenes/cama-mascota.jpg'
import jugueteInteractivo from '../imagenes/juguete-interactivo.jpg'

function Products({ addToCart, cartItems, removeFromCart }) {
  const products = [
    {
      serviceId: 4,
      name: 'Alimento Premium',
      description: 'Nutrición de alta calidad para tu mascota',
      price: 25,
      image: alimentoPremium,
      type:"producto",
    },
    {
      serviceId: 5,
      name: 'Juguete Interactivo',
      description: 'Mantén a tu gato entretenido y activo',
      price: 15,
      image: jugueteInteractivo,
      type:"producto",
    },
    {
      serviceId: 6,
      name: 'Cama para Mascotas',
      description: 'Comodidad y descanso para tu compañero',
      price: 35,
      image: camaMascota,
      type:"producto",
    },
  ];

  return (
    <section id="productos">
      <h2>Productos Destacados</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            service={product}
            buttonText="Comprar"
            onAddToCart={addToCart}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;