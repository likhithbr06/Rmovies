import React from 'react';
import './HeroImage.scss'

const HeroImage =(props)=>{
    return(
        <div className="rmdb-heroimage"
        style={{
            background:`linear-gradient(to bottom, rgba(0,0,0,0)39%,rgba(0,0,0,0)42%,rgba(0,0,0,0.70)100%), #1c1c1c`
        }}>
        <div className="rmdb-banner">
            <img className="img-fluid" src={props.image} alt="a banner"></img>
            <div className="rmdb-wrap"></div>
        </div>
          <div className="rmdb-heroimage-content">
            <div className="rmdb-heroimage-text">
                <h1 className="wow fadeInLeft" data-wow-delay=".50s">{props.title}</h1>
                <p className="wow fadeIn" data-wow-delay="1.20s">{props.text}</p>
            </div>
          </div>
       
        </div>
    )
}

export default HeroImage;