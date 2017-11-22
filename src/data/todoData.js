
let data = [{"isDone":true,"description":"Post items","type":"chore","dueDate":"2017-10-18T21:00:00.000Z","id":"5086441721823232"},{"isDone":false,"description":"Get milk","type":"chore","dueDate":"2017-10-30T00:00:00.000Z","id":"5629499534213120"},{"dueDate":"2017-10-17T21:00:00.000Z","isDone":false,"description":"test","type":"t","id":"5639445604728832"},{"dueDate":"2017-10-27T21:00:00.000Z","isDone":false,"description":"testing","type":"s","id":"5644406560391168"},{"isDone":false,"description":"Buy winter tyres","type":"car","dueDate":"2017-10-31T22:00:00.000Z","id":"5649391675244544"},{"dueDate":"2017-10-26T21:00:00.000Z","isDone":false,"description":"Graphing","type":"test","id":"5668600916475904"},{"type":"learn","dueDate":"2017-11-06T13:18:02.000Z","isDone":false,"description":"Learn React","id":"5707702298738688"},{"dueDate":"2017-10-30T22:00:00.000Z","isDone":true,"description":"refactoring","type":"xx","id":"5732568548769792"}];

function getItems()
{
    // get the data from somewhere?
    return new Promise((resolve, reject) => {

        resolve(data);

        //reject("something failed");
    });
}

export default { getItems };