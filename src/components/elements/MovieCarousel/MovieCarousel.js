import React from 'react';
import {IMAGE_BASE_URL,POSTER_SIZE} from '../../../config';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import '../../Slides/slider.scss'
import ScrollAnimation from 'react-animate-on-scroll';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",color: "black" }}       onClick={onClick}
      />
    );
  }

const MovieCarousel =(props)=>{
    const settings = {
        infinite: false,
        slidesToShow: 5,
        //slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };


        return(
          <div className="mCarousel">
            <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>{props.type === "movie" ? <h2>Popular Movies</h2> : <h2>Popular TV Shows</h2>}</ScrollAnimation>

            <Slider {...settings}>
              {props.movies.map((element, i) => {
                //console.log(element)
                if (i < 7) {
                  return (
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={800}>
                    <div className="mCard" key={i}>
                      <div></div>
                      {/* <div className="info-wrap"></div> */}
                      {props.type === "movie" ?
                        <Link to={{ pathname: `/movie/${element.id}`, isTV: false, moviename: `${props.movieName}` }} >
                          <img alt="poster" className="img-fluid" src={IMAGE_BASE_URL + POSTER_SIZE + element.poster_path}></img>
                        </Link>
                        :
                        <Link to={{ pathname: `/tvshow/${element.id}`, isTV: true, moviename: `${props.movieName}` }} >
                          <img alt="poster" className="img-fluid" src={IMAGE_BASE_URL + POSTER_SIZE + element.poster_path}></img>
                        </Link>
                      }
                      {props.type === "movie" ? 
                      <div className="box">
                        <p>{element.title}</p>
                        <span><span className="heart">❤️</span>{element.vote_average * 10}% </span>
                        <p>Released on : {element.release_date}</p>
                      </div>
                      : 
                      <div className="box">
                        <p>{element.name}</p>
                        <span><span className="heart">❤️</span>{element.vote_average * 10}% </span>
                        <p>Aired on : {element.first_air_date}</p>
                      </div>  }
                    </div>
                    </ScrollAnimation>
                  )
                }
              })}

              {props.type === "movie" ?
                <div>
                  <Link to={{ pathname: `/movies`, isTV: false }}>
                    <h3 className="last-box">View all</h3>
                  </Link>
                </div>
                :
                <div>
                  <Link to={{ pathname: `/tv`, isTV: true }}>
                    <h3 className="last-box">View all</h3>
                  </Link>
                </div>
              }
            </Slider>
          </div>
      )   
}

export default MovieCarousel;