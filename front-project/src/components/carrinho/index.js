import React, { useState, useEffect } from "react";
import "./style.css";
import SacolaVazia from "../sacola-Vazia";
import ProdutoNaSacola from "../produto-na-sacola";

export default function Carrinho({
  filmesNoCarrinho,
  handleAddMovie,
  handleRemoveMovie,
}) {
  const [totalCarrinho, setTotalCarrinho] = useState(0);

  useEffect(() => {
    let valor = 0;
    filmesNoCarrinho.map(
      (filme) =>
        (valor += Number(filme.price.replace("R$ ", "")) * filme.quantidade)
    );
    setTotalCarrinho(valor);
  }, [filmesNoCarrinho]);

  return (
    <div
      className={`car-container ${
        filmesNoCarrinho.length > 0 && "scrollVertical"
      }`}
    >
      <div className="purple-icon">
        <h1>Sacola</h1>
      </div>
      <div className="shopping-bag">
        {filmesNoCarrinho.length > 0 ? (
          <>
            {filmesNoCarrinho.map((filme) => {
              const { id, title, poster, vote, price, quantidade } = filme;
              return (
                <ProdutoNaSacola
                  key={id}
                  idMovie={id}
                  poster={poster}
                  title={title}
                  price={price}
                  vote={vote}
                  quantidade={quantidade}
                  handleAddMovie={() => handleAddMovie(filme)}
                  handleRemoveMovie={() => handleRemoveMovie(filme)}
                />
              );
            })}
            <button className="car-button">Confirme seus dados <span>R$ {totalCarrinho}</span></button>
          </>
        ) : (
          <SacolaVazia />
        )}
      </div>
    </div>
  );
}
