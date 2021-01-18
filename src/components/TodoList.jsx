import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      info: [
        {id: 1, name: "powerlift"}, 
        {id: 2, name: "meditate"},
        {id: 3, name: "groceries"},
        {id: 4, name: "laundry"},
        {id: 5, name: "study react"}
      ]
     }
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  handleDoubleClick(event) {
    event.preventDefault();
    console.log(event.target.id)
    console.log(this.state.info)
    this.setState({
      // item.id is a number but event.target.id is a string... LOL
      info: this.state.info.filter(item => item.id.toString() !== event.target.id)
    })
  }



  render() { 
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
      </div>
     );
  }
}
 
export default TodoList;
