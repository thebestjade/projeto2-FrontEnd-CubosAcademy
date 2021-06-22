import React from 'react';
import './style.css';
import Input from '../input';
import icone from '../../assets/images/search-icon.svg'

export default function Header({logo, altLogo, cumprimento, avatar, altAvatar, inputValue, setInputValue, submit}) {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt={altLogo} />
            <Input icone={icone} value={inputValue} handleChange={setInputValue} handleSubmit={submit}/>
            <div className='avatar-container'>
                <span>{cumprimento}</span>
                <img className='avatar' src={avatar} alt={altAvatar} />
            </div>
        </div>
    )
}
