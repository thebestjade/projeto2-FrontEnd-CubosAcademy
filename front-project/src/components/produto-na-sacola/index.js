import React from "react";
import addIcon from "../../assets/images/plus-icon.svg";
import trashIcon from "../../assets/images/trash-icon.svg";
import minusIcon from "../../assets/images/minus-icon.svg";
import "./style.css";

export default function ProdutoNaSacola({
  title,
  poster,
  price,
  quantidade,
  handleAddMovie,
  handleRemoveMovie,
}) {
  return (
    <div className="productCard-container">
      <div className="movie-container">
        <img className="poster" src={poster} alt={title} />
        <div className="infoCard-container">
          <span>{title}</span>
          <span>{price}</span>
        </div>
      </div>
      <div className="add-remove-movie">
        <img
          className="add-remove-button"
          onClick={handleAddMovie}
          src={addIcon}
          alt="Botão de adicionar"
        />
        <span>{quantidade}</span>
        <img
          className="add-remove-button"
          onClick={handleRemoveMovie}
          src={quantidade > 1 ? minusIcon : trashIcon}
          alt=""
        />
      </div>
    </div>
  );
}
