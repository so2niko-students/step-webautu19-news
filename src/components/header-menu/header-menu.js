import React from 'react';

import './header-menu.css';

function HeaderMenu(){
    return (
        <ul className="nav col-12 d-flex bg-dark">
            <li className="nav-item">
                <a className="nav-link active" href="#">Main page</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Ukraine</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">World</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Science</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Business</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Finance</a>
            </li>
        </ul>
    );
}

export default HeaderMenu;