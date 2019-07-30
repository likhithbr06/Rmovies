import Slider from "react-slick";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './slider.scss'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    
     
      render(){
        const settings = {
            className:"center",
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
          const movies_list =this.props.movie;
          console.log('slider-',movies_list)
          return(
            <div>
            <h2>Custom Arrows</h2>
            <Slider {...settings}>
              <div>
                <h3 className="box">1</h3>
              </div>
              <div>
                <h3 className="box">2</h3>
              </div>
              <div>
                <h3 className="box">3</h3>
              </div>
              <div>
                <h3 className="box">4</h3>
              </div>
              <div>
                <h3 className="box">5</h3>
              </div>
              <div>
                <h3 className="box">6</h3>
              </div>
            </Slider>
          </div>
          );
      }
  }