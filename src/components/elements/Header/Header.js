import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
const WOW = require('wow.js')
new WOW().init();
const Header =() =>{
    return(
        <div id="navbar" className="rmdb-header wow fadeInDownBig" data-wow-delay=".55s">
            <div className="rmdb-header-content">
                <Link to='/'>
                    <img className="rmdb-logo" src="./images/r_movies.png" alt="the logo" />
                </Link>
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo"/>
            </div>
        </div>
    )
}
export default Header;