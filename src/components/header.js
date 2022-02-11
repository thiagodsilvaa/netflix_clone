import React from "react";
import './header.css'

export default ({black}) =>{

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="https://www.netflix.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="https://www.netflix.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}