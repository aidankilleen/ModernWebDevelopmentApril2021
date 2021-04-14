console.log("spread operator test");

/*
let list = [1, 2, 3, 4, 5];

[one, two, ...rest] = list;

console.log(one);
console.log(two);
console.log(rest);
*/

let o = {
    one: 1, 
    two: 2, 
    three: 3, 
    four: 4, 
    five: 5
};

let {one, two, ...rest} = o;

console.log(one);
console.log(two);
console.log(rest);


let o2 = {
    name: "Aidan", 
    address: {
        line1: "Dry Bridge", 
        line2: "Glounthaune", 
        town: "Cork"
    }
}

let { address:{town} } = o2;

console.log(town);
console.log(o2.address.town);

let t = o2.address.town;












