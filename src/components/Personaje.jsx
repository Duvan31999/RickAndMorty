import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { personajeUnico } from "../funciones/funciones";
import Styles from "./Estilos/Personaje.module.css";

const Personaje = () => {
  const [personaje, setPersonaje] = useState([]);
  const params = useParams();

  useEffect(() => {
    personajeUnico(params.id, setPersonaje);
  }, [params.id]);

  return (
    <>
      <div className={Styles.PUnico}>
        <img
          className={`${Styles.col} ${Styles.PersonajeImagen}`}
          src={personaje.image}
          alt="Personaje"
        />
        <div className={`${Styles.col} ${Styles.PersonajeDetalles}`}>
          <h1>{personaje.name}</h1>
          <p className={Styles.firstItem}>Especie: {personaje.species}</p>
          <br />
          <p>Estado: {personaje.status}</p>
          <br />
          <p>genero: {personaje.gender}</p>

          
        </div>
      </div>
    </>
  );
};

export default Personaje;
