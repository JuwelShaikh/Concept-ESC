const users = [{id: 1234, Name:'juwel', Job: 'codder', Address: 'Dhanmondi Dhaka'}];

const findAddress = users[0].Address;


const data = {
    count: 500,
    data: [
        {id: 123, position: 'officer', address: 'Dhaka', branch: 'CentralRoad'},
        {id: 983, position: 'Assistant Officer', address: 'Dhaka', branch: 'Jigatola'}
    ]
}

const findingID = data.data[1].id;
const findingPosition = data.data[0].position;
console.log(findingPosition);