import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoListHeader from './TodoListHeader';
import NewItemInputs from './NewItemInputs';

class TodoList extends Component {
    render () {
        const { items,
                showNewItemInputs,
                toggleNewItemInputs,
                addNewItem,
                toggleIsDone } = this.props;
        return (
            <div>
                <TodoListHeader />
                <NewItemInputs showInputs={ showNewItemInputs }
                            toggleInputs={ toggleNewItemInputs }
                            addNewItem={ addNewItem }/>
                {
                items.map(element => <TodoItem description={element.description}
                                                dueDate={element.dueDate} 
                                                type={element.type}
                                                isDone={element.isDone}
                                                id={element.id}
                                                key={element.id}
                                                toggleIsDone={ toggleIsDone} />)
                }
            </div>
        )
    }
}

export default TodoList