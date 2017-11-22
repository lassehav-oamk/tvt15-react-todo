import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import TodoListHeader from './components/TodoListHeader';
import Menu from './components/Menu';
import NewItemInputs from './components/NewItemInputs';
import itemData from './data/todoData';


class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      showNewItemInputs: false,
      items: []
    };

    this.toggleNewItemInputs = this.toggleNewItemInputs.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.toggleIsDone = this.toggleIsDone.bind(this);
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
    this.setState({ items: [ 
                        ...this.state.items, 
                        {
                          description,
                          dueDate,
                          type,
                          id: this.state.items.length + 1
                        }
                    ]});
    this.toggleNewItemInputs();
  }

  toggleIsDone(itemId)
  {    
    let matchIndex = this.state.items.findIndex(element => element.id === itemId);
    console.log(matchIndex);
    this.state.items[matchIndex].isDone = !this.state.items[matchIndex].isDone;
    this.setState({
      items: [...this.state.items]
    });
  }

  render() {    

    return (
      <div className="container">
        <Menu />
        <TodoListHeader />
        <NewItemInputs showInputs={ this.state.showNewItemInputs }
                       toggleInputs={ this.toggleNewItemInputs }
                       addNewItem={ this.addNewItem }/>
        {
          this.state.items.map(element => <TodoItem description={element.description}
                                                    dueDate={element.dueDate} 
                                                    type={element.type}
                                                    isDone={element.isDone}
                                                    id={element.id}
                                                    key={element.id}
                                                    toggleIsDone={this.toggleIsDone} />)
        }
      </div>
    );
  }
}

export default App;
