import React from 'react';
import './FourColGrid.css'
import ScrollAnimation from 'react-animate-on-scroll';

const WOW = require('wow.js')
new WOW().init();

const FourColGrid=(props)=>{
    const renderElements=()=>{
        const gridElements = props.children.map((element,i) =>{
            return(
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                <div key={i} className="rmdb-grid-element" >
                    {element}
                </div>
                </ScrollAnimation>
            )
        })
        return gridElements;
    }
    
    return(
        <div className="rmdb-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content">
                {renderElements()}
            </div>
        </div>
    )
}

export default FourColGrid;