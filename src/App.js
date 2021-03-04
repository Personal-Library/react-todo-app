import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 9,
		};
	}

	incrementCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	decrementCount = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	render() {
		return (
			<div>
				<Navbar count={this.state.count} />
				<div className='card-container'>
					<div className='card'>
						<h2>Work</h2>
						<TodoList incrementCount={this.incrementCount} decrementCount={this.decrementCount} />
					</div>
					<div className='card'>
						<h2>Personal</h2>
						<TodoList incrementCount={this.incrementCount} decrementCount={this.decrementCount} />
					</div>
					<div className='card'>
						<h2>Study</h2>
						<TodoList incrementCount={this.incrementCount} decrementCount={this.decrementCount} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
