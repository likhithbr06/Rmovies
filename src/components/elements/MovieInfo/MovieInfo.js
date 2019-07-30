import React from 'react';
import {IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.scss';
const WOW = require('wow.js')
new WOW().init();
const MovieInfo=(props)=>{
    return(
        <div className="rmdb-movieinfo " 
            style={{
                background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000' 
            }}
        >
           <div className="rmdb-movieinfo-content wow fadeInRightBig" data-wow-delay="1s" >
                <div className="rmdb-movieinfo-thumb">
                    <MovieThumb 
                        image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
                        clickable={false}
                    />
                </div>
                <div className="rmdb-movieinfo-text wow fadeIn" data-wow-delay="2s" >
                    {props.isTV == true ? <h1>{props.movie.original_name}</h1> : 
                      <h1>{props.movie.original_title}</h1> }

                       <div >
                            <h3>GENRES :</h3>
                            {props.movie.genres.map((element,i)=>{
                                return(
                                    <span key={i}  >{element.name},</span>
                                )
                            })}

                        </div>
                        <h3>PLOT</h3>
                        <p>{props.movie.overview}</p>
                        <h3>IMDB RATING</h3>
                        <div className="rmdb-rating">
                            <meter min="0" max="100" low="40" high="70" optimum="100" value={props.movie.vote_average * 10} > </meter>
                            <p className="rmdb-score">{props.movie.vote_average}</p>
                        </div>
                        <div className="row"> 
                        <div className="col-md-12"> 
                        {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
                        {props.directors.map((element,i)=>{
                            return(
                                <p key={i} className="rmdb-director">{element.name}</p>
                            )
                        })}
                        </div>
                        
                        </div>
                    </div>
           </div>
        </div>
    )
}
export default MovieInfo;