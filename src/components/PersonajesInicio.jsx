import React from "react";
import { useState } from "react";
import Styles from "./Estilos/PersonajesInicio.module.css";
import PersonajeCard from "./PersonajeCard";


const Inicio = () => {

  

  return (
    <>
      <h1 className={Styles.Title}>
        Rick And Morty
      </h1>
      
      <ul className={Styles.Personajes}>
        <PersonajeCard />
      </ul>
    </>
  );
};

export default Inicio;
