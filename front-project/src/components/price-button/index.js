import React from 'react';
import './style.css';

export default function Button({ button, handleClick }) {
    return (
        <button className="button-container" onClick={handleClick}>
            Sacola
            <span className="price-button">{button}</span>
        </button>
    )
}
