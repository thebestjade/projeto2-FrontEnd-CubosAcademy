import React from "react";
import "./style.css";
import Button from "../price-button";
import Titulo from "../titulo";

export default function Card({
  poster,
  price,
  title,
  vote,
  handleAddMovie,
  idMovie,
}) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url('${poster}') center center / cover no-repeat`,
      }}
    >
      <Titulo titulo={title} nota={vote} />
      <Button
        button={price}
        handleClick={() =>
          handleAddMovie({
            poster,
            price,
            title,
            vote,
            id: idMovie
          })
        }
      />
    </div>
  );
}
