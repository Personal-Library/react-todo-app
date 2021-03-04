import React, { Component } from 'react';
import Clock from './Clock';

class Navbar extends Component {
	render() {
		return (
			<ul className='navbar-container'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/'>Contact</a>
				</li>
				<li className='nav-counter'>Task Manager {this.props.count}</li>
				<li>Mode</li>
				<li>
					<Clock />
				</li>
			</ul>
		);
	}
}

export default Navbar;
