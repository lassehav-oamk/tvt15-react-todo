import axios from 'axios';
import moment from 'moment';

function getItems()
{
    return new Promise((resolve, reject) => {

        axios.get("https://todoserver-182713.appspot.com/todos")
        .then(results => {
            console.log(results);
            const items = results.data.map(element => {
                element.dueDate = moment(element.dueDate);
                return element;
            });
            resolve(items);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function addNewItem(description, dueDate, type)
{
    console.log(dueDate);
    return new Promise((resolve, reject) => {
        axios.post('https://todoserver-182713.appspot.com/todos', {
            description,
            dueDate,
            isDone: false,
            type
        }).then(result => {
            resolve();
        }).catch(error => {
            console.log(error);
            reject();
        });
        
    });
  /*this.setState({ items: [ 
                      ...this.state.items, 
                      {
                        description,
                        dueDate,
                        type,
                        id: this.state.items.length + 1
                      }
                  ]});
  this.toggleNewItemInputs();*/
}

export default { getItems, addNewItem };