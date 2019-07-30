import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom';
import  PropTypes from 'prop-types';

const MovieThumb=(props)=>{

    if(props.clickable){
        if(props.isTV){
            return(
                <div className="rmdb-moviethumb">
                {props.clickable ?
                    <Link to={{pathname : `/tvshow/${props.showID}`,isTV : true,showname: `${props.showName}`}} >
                        <img src={props.image} alt="moviethumb"/>
                    </Link>
                :   <img src={props.image} alt="moviethumb" />}
                </div>
            )
        }
        else{
            return(
                <div className="rmdb-moviethumb">
                {props.clickable ?
                    <Link to={{pathname : `/movie/${props.movieID}`,isTV : false ,moviename: `${props.movieName}`}} >
                        <img src={props.image} alt="moviethumb"/>
                    </Link>
                :   <img src={props.image} alt="moviethumb" />}
                </div>
            )
        }
    }else{
        return(
            <div className="rmdb-moviethumb">
            <img src={props.image} alt="moviethumb" />
            </div>
        )
    }
    /*if( props.isTV){
        console.log(props.isTV)
        return(
            <div className="rmdb-moviethumb">
            {props.clickable ?
                <Link to={{pathname : `/tvshow/${props.showID}`,isTV : `${props.isTV}`,showname: `${props.showName}`}} >
                    <img src={props.image} alt="moviethumb"/>
                </Link>
            :   <img src={props.image} alt="moviethumb" />}
            </div>
        )
    }
    else if(props.clickable){
        return(
            <div className="rmdb-moviethumb">
                 <Link to={{pathname : `/movie/${props.movieID}`,isTV : false ,moviename: `${props.movieName}`}} >
                <img src={props.image} alt="moviethumb" />
            </Link>
            </div>
        )
    }
    else{
        return(
            <div className="rmdb-moviethumb">
            <img src={props.image} alt="moviethumb" />
            </div>
        )
        
    }
    return(
        <div className="rmdb-moviethumb">
        {props.clickable ?
            <Link to={{pathname : `movie/${props.movieID}`,moviename: `${props.movieName}`}} >
                <img src={props.image}/>
            </Link>
        :   <img src={props.image}/>}
        </div>
    )*/
}
MovieThumb.propTypes={
    image : PropTypes.string,
    moviename: PropTypes.string
}
export default MovieThumb;