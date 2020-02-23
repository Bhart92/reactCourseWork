import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class Header extends React.Component{
	state = {
		menuOpen: false
	  }
	  closeMenu () {
		this.setState({menuOpen: false})
	  }
	  handleStateChange (state) {
		this.setState({menuOpen: state.isOpen})  
	  }
	render(){
		return (
			<header className='header'>
			<div className="header--image">
			<NavLink to="/" exact={true}><h1>B<span>K</span>H</h1></NavLink>
				<h2 className='header--image--h2'>Brandon K. <span>Hart</span><br /><span>Front End Web Developer</span></h2>
			</div>
			<div className="header--mid-container">
				<ul>
					<li>
						<NavLink onClick={() => this.closeMenu()} activeClassName="is-active" exact={true} to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink  onClick={() => this.closeMenu()} activeClassName="is-active" to="/contact">Contact</NavLink>
					</li>
					<li>
						<a href="./images/resume2020.pdf" download>Resume</a>
					</li>
				</ul>
			</div>
			<div className="header--bottom-container">
				<a href="https://github.com/Bhart92">View My Github. <i className="fab fa-github"></i> </a>
			</div>
			<div className="header--bottom-container mobile">
				<NavLink to="/" exact={true}><h1>B<span>K</span>H</h1></NavLink>
			</div>
			<Menu 
        	  isOpen={this.state.menuOpen} width={'100%'} right burgerButtonClassName={ 'burger-btn' }
         	 onStateChange={(state) => this.handleStateChange(state)}
        >
				<div className="header--mobile-nav-mid-container">
				<NavLink onClick={() => this.closeMenu()} to="/" exact={true}><h1>B<span>K</span>H</h1></NavLink>
				</div>
				<div className="header--mobile-nav-bottom-container">
				<ul>
					<li>
						<NavLink onClick={() => this.closeMenu()} activeClassName="is-active" exact={true} to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink  onClick={() => this.closeMenu()} activeClassName="is-active" to="/contact">Contact</NavLink>
					</li>
					<li>
						<a href="./images/resume2020.pdf" download>Resume</a>
					</li>
					<li>
					<a href="https://github.com/Bhart92">View My Github. <i className="fab fa-github"></i> </a>
					</li>
				</ul>
			</div>
			</Menu>	
		</header>
		)
	}
};

export default Header;