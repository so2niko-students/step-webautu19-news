import React from 'react';

import './search.css';

function Search(){
    return (      
        <form className="form-inline col-5 col-xl-3 align-right">
            <input 
                className="form-control form-control-sm mr-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" />
            <button 
                className="btn btn-sm btn-outline-success my-2 my-sm-0" 
                type="submit">Search</button>
        </form>
    );
}

export default Search;