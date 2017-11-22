import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import TodoListHeader from './components/TodoListHeader';
import Menu from './components/Menu';
import NewItemInputs from './components/NewItemInputs';


class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      showNewItemInputs: false,
      items: [
        {
          description: "Buy chocko",
          dueDate: "22.11.2017",
          type: "shop",
          id: 1
        },
        {
          description: "Learn React",
          dueDate: "1.11.2017",
          type: "learn",
          id: 2
        },
        {
          description: "Read book",
          dueDate: "2.12.2017",
          type: "read",
          id: 3
        }
      ]
    };

    this.toggleNewItemInputs = this.toggleNewItemInputs.bind(this);
  }

  toggleNewItemInputs()
  {
    console.log("tuut");    
    this.setState({ showNewItemInputs: !this.state.showNewItemInputs });
  }

  render() {    

    return (
      <div className="container">
        <Menu />
        <TodoListHeader />
        <NewItemInputs showInputs={ this.state.showNewItemInputs }
                       toggleInputs={ this.toggleNewItemInputs }/>
        {
          this.state.items.map(element => <TodoItem description={element.description}
                                        dueDate={element.dueDate} 
                                        type={element.type}
                                        key={element.id} />)
        }
      </div>
    );
  }
}

export default App;
