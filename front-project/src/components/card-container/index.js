import React from "react";
import "./style.css";
import Card from "../card";

export default function CardsContainer({
  mainTitulo,
  listaDeFilmes,
  handleAddMovie
}) {
  return (
    <div className="main-container">
      <h1 className="main-titulo">{mainTitulo}</h1>
      <div className="cards-container">
        {listaDeFilmes.map(
          ({ id, title, poster_path, vote_average, price }) => {
            return (
              <Card
                key={title}
                idMovie={id}
                poster={poster_path}
                title={title}
                vote={vote_average}
                price={`R$ ${price}`}
                handleAddMovie={handleAddMovie}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
