import React from 'react';
import FontAwesome from 'react-fontawesome';
import {calcTime,convertMoney} from '../../../helpers';
import './MovieInfoBar.scss';
const WOW = require('wow.js')
new WOW().init();
const MovieInfoBar=(props)=>{
    return(
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content row">
                <div className="col-md-4 col-sm-12 wow bounceInLeft" data-wow-delay="1s">
                    <FontAwesome className="fa-time" name="clock-o" size="2x" />
                    {props.isTV == true ? 
                    <span className="rmdb-movieinfobar-info">Seasons : {props.seasons}</span>
                    : <span className="rmdb-movieinfobar-info">Running Time: {calcTime(props.time)}</span> }
                </div>
                <div className="col-md-4 col-sm-12 wow bounceInLeft" data-wow-delay="1.35s">
                <FontAwesome className="fa-budget" name="money" size="2x" />
                {props.isTV == true ? 
                    <span className="rmdb-movieinfobar-info">Total Episodes : {props.episodes}</span>
                    : <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span> }
                </div>
                <div className="col-md-4 col-sm-12 wow bounceInLeft" data-wow-delay="1.65s">
                <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                {props.isTV == true ? 
                    <span className="rmdb-movieinfobar-info">Episode runtime : {calcTime(props.runtime)}</span>
                    : <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span> }
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBar;