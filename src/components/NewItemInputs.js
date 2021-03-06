import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class NewItemInputs extends Component {    

    constructor(props)
    {
        super(props);

        this.state = {
            inputTodoValue: "",
            inputDueDateValue: "",
            inputTypeValue: ""
        }

        this.inputTodoChange = this.inputTodoChange.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }

    inputTodoChange(event)
    {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    addNewItem()
    {
        this.props.addNewItem(this.state.inputTodoValue,
                            this.state.inputDueDateValue,
                            this.state.inputTypeValue);
        this.setState({
            inputTodoValue: "",
            inputDueDateValue: "",
            inputTypeValue: ""
        });    
    }
    

    render () {

        let content;
        
        if(this.props.showInputs === false)
        {
            content = (<button className="btn btn-default btn-block" 
                                onClick={ this.props.toggleInputs }>Add new</button>);
        }
        else
        {
            content = (
                <div>
                    <div className="col-md-4">
                        <input type="text" 
                                name="inputTodoValue"
                                value={ this.state.inputTodoValue }
                                onChange={ this.inputTodoChange }/>
                    </div>
                    <div className="col-md-4">
                        <input type="date" 
                                name="inputDueDateValue" 
                                value={this.state.inputDueDateValue}
                                onChange={ this.inputTodoChange } />
                    </div>
                    <div className="col-md-4">
                        <input type="text"
                            name="inputTypeValue"
                            value={ this.state.inputTypeValue }
                            onChange={ this.inputTodoChange } />
                        <button className="btn btn-success"
                                onClick={ this.addNewItem }>Save</button>
                        <button className="btn btn-default"
                                onClick={ this.props.toggleInputs }>Cancel</button>
                    </div>
                </div>);
        }

        return (
            <div className="row">
                { content }                    
            </div>
        )
    }
}

export default NewItemInputs