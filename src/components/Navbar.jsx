import React, { Component } from 'react';
import Clock from './Clock';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTasks: 3
     }
  }
  render() { 
    return ( 
      <ul className="navbar-container">
        <li>Home</li>
        <li>Contact</li>
        <li className="nav-counter">{this.state.activeTasks} Active Tasks</li>
        <li>Mode</li>
        <li><Clock /></li>
      </ul>
     );
  }
}
 
export default Navbar;