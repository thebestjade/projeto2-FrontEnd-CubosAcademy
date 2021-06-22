import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";
import './style.css';

export default function Input({ icone, value, handleChange, handleSubmit }) {
  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Pesquise filmes..."
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
      <SearchIcon className="search-icon" onClick={handleSubmit}/>
    </form>
  );
}
