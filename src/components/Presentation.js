import React from 'react';
import "./Presentation.css";

function Presentation(){
  const changePage = () => {
    console.log("Movernos al formulario");
  }

  return (
    <section className="presentation">
      <h2 className="presentation__title">Los astros siempre preparan cosas asombrosas para nosotros</h2>
      <p className="presentation__text">¿Quieres conocer que tiene preparado para ti?</p>
      <button 
        className="presentation__start"
        onClick={changePage}>Empezar</button>
    </section>
  )
}

export default Presentation;