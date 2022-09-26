import React from "react";
import { todosPersonajes } from "../funciones/funciones";
import { useEffect, useState } from "react";
import Styles from "./Estilos/PersonajeCard.module.css";

const PersonajeCard = () => {
  //setear hook useState
  const [personajes, setPersonajes] = useState(null);
  const [search, setSearch] = useState(null);

  //función para buscar

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //Método para filtrar
  let resultado = [];
  if (!search) {
    resultado = personajes;
  } else {
    resultado = personajes.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  // const results = !search ? personajes : personajes.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase())

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <>
      <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar"
          className={Styles.Buscar}
        />

        
      </div>

      {personajes != null
        ? resultado.map((personaje) => (
            <li className={Styles.PersonajesCard} key={personaje.id}>
              <div>
                <h4>{personaje.name}</h4>
                <div>
                  <a href={`/Personaje/${personaje.id}`}>
                    <img
                      className={Styles.PersonajeImage}
                      src={personaje.image}
                      alt="RickandMorty"
                    />
                  </a>
                </div>
              </div>
            </li>
          ))
        : "no hay personajes"}
    </ >
  );
};

export default PersonajeCard;
