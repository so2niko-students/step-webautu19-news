import React from 'react';

import './header-menu.css';

function HeaderMenu(){
    return (
        <ul className="nav col-12 d-flex bg-dark">
            <li className="nav-item">
                <a className="nav-link active" href="main_page">Main page</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="ukraine">Ukraine</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="world">World</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="science">Science</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="business">Business</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="finance">Finance</a>
            </li>
        </ul>
    );
}

export default HeaderMenu;