import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      info: [
        {id: 1, name: "meditate"},
        {id: 2, name: "groceries"},
        {id: 3, name: "laundry"},
        {id: 4, name: "study react"}
      ],
      newTask: ''
     }
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({
      // item.id is a number but event.target.id is a string... LOL
      info: this.state.info.filter(item => item.id.toString() !== event.target.id)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      info: [{ id: Math.floor(Math.random()*10000000), name: this.state.newTask }, ...this.state.info],
      newTask: ''
    })
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value
    })
  }

  render() { 
    const newTask = this.state.newTask

    return ( 
      <div className="list-info">
        <ul>
          {this.state.info.map((item)=>{
            return (<li 
              key={item.id} 
              id={item.id}
              onDoubleClick={this.handleDoubleClick}>
            {item.name}
            </li>)
          })}
        </ul>
        <input type="text" 
        value={newTask} 
        placeholder="Enter task..."
        onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
 
export default TodoList;
