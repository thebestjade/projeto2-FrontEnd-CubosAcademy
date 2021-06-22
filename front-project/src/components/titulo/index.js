import React from 'react';
import './style.css';
import {ReactComponent as Star} from '../../assets/images/golden-star.svg';

export default function Titulo({titulo, nota}) {
    return (
        <div className="title-container">
            <h3 className="title">{titulo}</h3>
            <div>
                <Star />
                <span className="nota">{nota}</span>
            </div>
        </div>
    )
}
