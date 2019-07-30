import React from 'react';
import './notfound.scss'
import {Link} from 'react-router-dom';

const NotFound=()=>{
    return(
        <div id="notfound">
            <div className="notfound">
            <div className="error-404">
                <h1>404</h1>
            <h2>page not found</h2>
            </div>
            <Link to="/">
                <a className="go-home">GO HOME</a>
            </Link>
            </div>
        </div>
    )
}

export default NotFound;