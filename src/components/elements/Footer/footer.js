import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';

const Footer =() =>{
    return(
        <footer>
            <div className="container footer">
                   <p> <span className="design">Designed with </span><span className="heart">❤</span><span className="name">likhith <span className="copy">©️</span> 2019</span></p>
            </div>
        </footer>
    )
}

export default Footer;