var data = [
    {
        "row": 1,
        "name": "Alice",
        "date": "2020-01-01T00:00:00.000Z",
        "colour": "red",
        "quantity": 250
    },
    {
        "row": 2,
        "name": "Bob",
        "date": "2020-02-01T00:00:00.000Z",
        "colour": "green",
        "quantity": 50
    },
    {
        "row": 3,
        "name": "Carol",
        "date": "2020-03-01T00:00:00.000Z",
        "colour": "blue",
        "quantity": 33
    },
    {
        "row": 4,
        "name": "Dan",
        "date": "2020-03-31T23:00:00.000Z",
        "colour": "red",
        "quantity": 200
    },
    {
        "row": 5,
        "name": "Alice",
        "date": "2020-04-30T23:00:00.000Z",
        "colour": "blue",
        "quantity": 100
    },
    {
        "row": 6,
        "name": "Bob",
        "date": "2020-05-01T23:00:00.000Z",
        "colour": "green",
        "quantity": 50
    },
    {
        "row": 7,
        "name": "Carol",
        "date": "2020-06-30T23:00:00.000Z",
        "colour": "orange",
        "quantity": 76
    },
    {
        "row": 8,
        "name": "Dan",
        "date": "2020-08-14T23:00:00.000Z",
        "colour": "red",
        "quantity": 34
    }
];

console.log("processing an array");

console.log(data.length);

data.forEach(item=> console.log(item.name));

let max = 0;
data.forEach(item=>{
    if (max < item.quantity) {
        max = item.quantity;
    }
});

for (let i=0; i<data.length; i++) {
    if (max < data[i].quantity) {
        max = data[i].quantity;
    }    
}
console.log(`Max = ${max}`);

let bigOrders = data.filter(item=>item.quantity >= 100);

console.log(bigOrders);

let sorted = data.sort((a, b)=> b.quantity - a.quantity);

sorted.forEach(item=>console.log(`${item.quantity}, ${item.name}`));

console.log("-------------------------");
// filter items greater than 100 sort ascending by quantity
// display quantity and name
data.filter(item=>item.quantity >= 100)
    .sort((a, b)=> a.quantity - b.quantity)
    .forEach(item=>console.log(`${item.quantity}, ${item.name}`));





/*
let list = [1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 12];

list.forEach(item => console.log(item));


let evenNumbers = list.filter(item => item % 2 == 0);

evenNumbers = list.filter(item => item % 2 == 0);

console.log(evenNumbers);
*/

