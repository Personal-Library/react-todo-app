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
  }
  render() { 
    return ( 
      <div className="list-info">
        <ul>
          {this.state.info.map((item)=>{
            return (<li key={item.id}>{item.name}</li>)
          })}
        </ul>
      </div>
     );
  }
}
 
export default TodoList;