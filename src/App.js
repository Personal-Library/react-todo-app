import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render() { 
    return ( 
      <div>
        <Navbar />
        <div className="card-container">
          <div className="card">
            <h3>Work</h3>
            <TodoList />

          </div>
          <div className="card">
            <h3>Personal</h3>
            <TodoList />

          </div>
          <div className="card">
            <h3>Study</h3>
            <TodoList />
            
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
