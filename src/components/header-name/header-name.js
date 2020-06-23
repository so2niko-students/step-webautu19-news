import React from 'react';

import './header-name.css';

import Logo from './news-logo.png';

function HeaderName(){
    return <div className="col-4 col-xl-6 header-menu d-flex align-items-center justify-content-center text-white">
        <img 
            src={ Logo } 
            alt="logo Web91" 
            className="header-menu__logo" />
        Web91 News
        </div>;
}

export default HeaderName;

