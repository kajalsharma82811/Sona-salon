import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from './logg.png'

import 'font-awesome/css/font-awesome.min.css';




function Navbar() {
	return (
		
		
		<nav className="navBar">
                <ul>
                    <li><NavLink className = "text-link" to="/"><img className="image" src={logo} alt="logo"></img></NavLink></li>
                    <li><NavLink className = "text-link" exact to="/">Home</NavLink></li>
                    <li><NavLink className = "text-link"to="/about/">About</NavLink></li>
                    <li><NavLink className = "text-link"to="/contact/">Contact</NavLink></li>
                    <li><NavLink className = "text-link"to="/services/">Services</NavLink></li>
                    <li className = "icon-link"><i class="fa fa-phone" aria-hidden="true"></i> +91-123456789</li>
                    <li><NavLink className = "icon-link"to="/portfolio/"><i class="fa fa-instagram" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink className = "icon-link"to="/portfolio/"><i class="fa fa-facebook" aria-hidden="true"></i></NavLink></li>

</ul>

            </nav>
			
		
	)
}

export default Navbar