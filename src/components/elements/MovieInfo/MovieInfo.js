import React from 'react';
import {API_URL,API_KEY, IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.scss';
import Modal from '../Modal/Modal';
import {getVideo} from '../../movieservice';

const WOW = require('wow.js')
new WOW().init();

const getVideoLink = async(video_url)=>{
    try{
        const vid_result = await (await getVideo(video_url));
        var keys = vid_result;
        return keys;
    }
    catch(e){
        console.log(e);
    }

}
let key;
const MovieInfo=(props)=>{
   
    if(!props.isTV){
        
        let movie_vid_url=`${API_URL}movie/${props.movie.id}/videos?api_key=${API_KEY}&language=en-US`;
        getVideoLink(movie_vid_url).then(function(res){
            //console.log(res);
             res.results.map((element,i)=>{
                 if(element.type == 'Trailer')
                 {
                     key= element.key;
                 }
             })
        })
       // console.log(key)
    }
    else{
        let tv_vid_url = `${API_URL}tv/${props.movie.id}/videos?api_key=${API_KEY}&language=en-US`;
        getVideoLink(tv_vid_url).then(function(res){
            res.results.map((element,i)=>{
                if(element.type == 'Trailer')
                {
                    key= element.key;
                }
            })
        })
    }
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
                       <Modal video_key= {key}></Modal>
                    </div>
           </div>
        </div>
    )
}
export default MovieInfo;