import React from 'react';
import './style.css';
import imagemSacolaVazia from '../../assets/images/person-illustration.svg'

export default function SacolaVazia() {
    return (
        <div className="sacolaVazia-container">
            <h1 className="main-titulo sacola">Sua sacola está vazia</h1>
            <p>Adicione filmes agora</p>
            <img src={imagemSacolaVazia} alt="Sacola vazia" />
        </div>
    )
}
