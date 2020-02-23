import React from 'react';
import { NavLink } from 'react-router-dom';



const LandingPage = () => (
	<div className="landing-page">
		<div className="landing-page--container">
			<div className='landing-page--hero-box'>       		
				 <h1 className='landing-page--title'>Hi! <span>I'm Brandon</span>,</h1>
  				 <h2 className='landing-page--subtitle'>Front-End Web Developer</h2>
        		<div className="landing-page--button-box">
					<NavLink className="button-fill" exact={true} to="/portfolio">Portfolio</NavLink>
					<NavLink className="button-outline" to="/contact">Contact</NavLink>
			</div></div>
        	</div>
	</div>
);

export default LandingPage;