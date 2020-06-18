import React from 'react';

import './header.css';
import Info from '../info';
import HeaderName from '../header-name';
import Search from '../search';
import HeaderMenu from '../header-menu';

function Header(){
    return (
        <>
            <Info />
            <HeaderName/>
            <Search />
            <HeaderMenu />
        </>
    );
}

export default Header;