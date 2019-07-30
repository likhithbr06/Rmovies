import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import './Actor.scss';
const WOW = require('wow.js')
new WOW().init();
const Actor=(props)=>{
    const POSTER_SIZE="w154";
    return(
        <div className="rmdb-actor wow fadeIn" data-wow-delay="1.20s">
            <img src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : '../images/no_image.jpg'}></img>
            <span className="rmdb-actor-name">{props.actor.name}</span>
            <span className="rmdb-actor-character">{props.actor.character}</span>
        </div>
    )
}

export default Actor;