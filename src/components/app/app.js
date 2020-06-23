import React from 'react';
import './app.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

function App(){
    return (
        <div className="container bg-light min-vh-100">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;