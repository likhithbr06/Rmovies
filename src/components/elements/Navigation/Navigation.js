import React from 'react';
import {Link} from'react-router-dom';
import './Navigation.scss';
import left from '../../../left-arrow.svg';
const WOW = require('wow.js')
new WOW().init();
const Navigation=(props)=>{
    return(
        <div className="rmdb-navigation wow bounceInUp" data-wow-delay="2.5s">
            <div className="rmdb-navigation-content">
                <Link to="/">
                    <img src={left} alt="back"></img>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;