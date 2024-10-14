// src/components/Services.js
import React from 'react';
import ProductCard from './ProductCard';
import vacunacion from '../imagenes/vacunacion.jpg'
import peluqueria from '../imagenes/peluqueria.jpg'
import consultaVeterinaria from '../imagenes/consulta-veterinaria.jpg'

function Services({ addToCart, cartItems, removeFromCart }) {
  const services = [
    {
      serviceId: 1,
      name: 'Consulta Veterinaria',
      description: 'Atención médica profesional para tu mascota',
      price: 50,
      image: consultaVeterinaria,
      type:"servicio"
    },
    {
      serviceId: 2,
      name: 'Peluquería Canina',
      description: 'Corte y aseo para que tu perro luzca increíble',
      price: 30,
      image: peluqueria,
      type:"servicio"
    },
    {
      serviceId: 3,
      name: 'Vacunación',
      description: 'Protege a tu mascota contra enfermedades',
      price: 40,
      image: vacunacion,
      type:"servicio"
    },
  ];

  return (
    <section id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="product-grid">
        {services.map((service, index) => (
          <ProductCard
            key={index}
            service={service}
            buttonText="Reservar"
            onAddToCart={addToCart}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;