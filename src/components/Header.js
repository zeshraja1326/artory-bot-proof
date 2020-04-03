import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
        <nav style={{backgroundColor: '#333333'}}>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo"><img alt="Artory Logo" src="./logo.png" width="50px" height="60px" style={{paddingLeft: 10}}></img></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="http://www.artory.co.uk/">Main Website</a></li>
                    <li><a href="http://www.artory.co.uk/venues/">Venues</a></li>
                    <li><a href="http://www.artory.co.uk/press/">Press</a></li>
                    <li><a href="http://www.artory.co.uk/contact-us/">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )


export default Header;