import React, { Component } from 'react';
import './TodoItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoItem extends Component {
    render () {
        const { description, dueDate, type, isDone, id } = this.props;

        return (
            <div className={ isDone ? "row itemIsDone" : "row" }
                 onClick={ () => {this.props.toggleIsDone(id)} }>
                <div className="col-md-4">{ description }</div>
                <div className="col-md-4">{ dueDate }</div>
                <div className="col-md-4">{ type }</div>
            </div>
        )
    }
}

export default TodoItem