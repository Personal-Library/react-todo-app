import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [
				{ id: 1, name: 'meditate' },
				{ id: 2, name: 'groceries' },
				{ id: 3, name: 'laundry' },
			],
			newTask: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			newTask: event.target.value,
		});
	};

	handleDoubleClick = (event) => {
		this.setState({
			info: this.state.info.filter((item) => item.id.toString() !== event.target.id),
		});
    this.props.decrementCount();
	};

	handleSubmit = () => {
		if (this.state.newTask) {
			this.setState({
				info: [
					{ id: Math.floor(Math.random() * 10000000), name: this.state.newTask },
					...this.state.info,
				],
				newTask: '',
			});
      this.props.incrementCount();
		}
	};

	render() {
		const newTask = this.state.newTask;

		return (
			<div className='list-info'>
				<ul>
					{this.state.info.map((item) => {
						return (
							<li key={item.id} id={item.id} onDoubleClick={this.handleDoubleClick}>
								{item.name}
							</li>
						);
					})}
				</ul>
        <div className='list-info-controls'>
				<input
					type='text'
					value={newTask}
					placeholder='Enter task...'
					onChange={this.handleChange}
					onKeyPress={(e) => (e.key === 'Enter' ? this.handleSubmit() : null)}
				/>
				<button onClick={this.handleSubmit}>Add</button>
        </div>
			</div>
		);
	}
}

export default TodoList;
