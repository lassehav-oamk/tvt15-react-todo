import React, { Component } from 'react';
import Menu from './components/Menu';
import itemData from './data/todoData';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      view: "todos",
      showNewItemInputs: false,
      items: []
    };

    this.toggleNewItemInputs = this.toggleNewItemInputs.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    //this.toggleIsDone = this.toggleIsDone.bind(this);
  }

  componentDidMount() {
    itemData.getItems().then(result => {
      this.setState({ items: result});
    });
  }

  toggleNewItemInputs()
  { 
    this.setState({ showNewItemInputs: !this.state.showNewItemInputs });
  }

  addNewItem(description, dueDate, type)
  {
    itemData.addNewItem(description, dueDate, type).then(results => {
      itemData.getItems().then(items => {
        this.setState({ items });
      })
    });
    
    this.toggleNewItemInputs();
  }

  /*toggleIsDone(itemId)
  {    
    let matchIndex = this.state.items.findIndex(element => element.id === itemId);
    console.log(matchIndex);
    //this.state.items[matchIndex].isDone = !this.state.items[matchIndex].isDone;
    this.setState({
      items: [...this.state.items]
    });
  }*/

  render() {    
    return (
      <div className="container">
        <Menu />
        <TodoList items={ this.state.items }
                  showNewItemInputs={ this.state.showNewItemInputs }
                  toggleNewItemInputs={ this.toggleNewItemInputs }
                  addNewItem={ this.addNewItem }/>
      </div>
    );
  }
}

export default App;
