// CONST & LET
// Let can be manipulated
// Const = Think Constant 
// If a const has Let variables, changing the let is permissable, changing the const value will result in error
// const can have items 'pushed' to it like item to an array
let namester = 'John';
namester = 'johnny';

const person = {
    name:'JohnJohn',
    age:33
};

console.log(person)

const nums=[9,23,33,91];
nums.push(11);
console.log(nums)

// ARROW FUNCTIONS Review

// Basic Function
function sayHello(){
    console.log('Hey Viseth')
}
  
sayHello();

//Arrow Function
const arrowfx = () => {
    console.log('Hey arrow function');
}

arrowfx();

//Arrow One line function - notice elimination of brackets to minimize code 
const oneline = () => console.log('Hey One Line Arrow Function ')

oneline();

// Code can also be wrriten as 
// paramater name is being passed in
// ** PRETTIER AND AUTOFORMAT EXTENSION will REMOVE parenthesis around name it is not a bug, it is an extension in vs code 

const onelinepar = (name) => console.log('My name is what My name is who My name is ' + name);
const onelinelit = (name) => console.log(`My name is what My name is who My name is ${name}`)

onelinepar('Slim Shady');
onelinelit('Slim Shady!!!');

// FOREACH
// Loop through array

const fruits=['Apples', 'Oranges', 'Grapes']

fruits.forEach((fruit) => console.log(fruit))
console.log('with index')

fruits.forEach((fruit, index) => console.log(fruit))
console.log('chaning name of fruit just to learn')

fruits.forEach((food) => console.log(food));

// Map - Returns and array after having done something to it 
// slice function + removing the last letter from the list + converting to uppercase
const singleFruit = fruits.map((fruit) => fruit.slice(0,-1).toUpperCase())

console.log(singleFruit)

//FILTER 
const people = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Sharen'}
]

const people2 = people.filter(person => person.id !== 2);
console.log(people2)

// Spread - values out 
// state

const arr = [1,2,3]

const arr2 = [...arr,4,5,6]; // ' ... '  = Used for Spread 

console.log(arr2)

const arr3 = [arr,4,5,6]
console.log(arr3)

// Usage of Spread + Filter together 
const arr4 = [...arr.filter(num => num !== 2)]
console.log(arr4)
console.log('arr4')
const person1 = {
    name: "brad",
    age:36
};

const person2 = {
    ...person1,
    email:'brad@gmail.com'
};

console.log(person1)
console.log(person2)


// Destructuring

const profile = {
    name: 'John Doe',
    address: {
        street: '40 main street',
        city:'Boston'
    },
    hobbies :['movies','music']
}

console.log(profile.name)
// or 
    // const { hobbies } = profile;
    // console.log(hobbies);
// or
const {namn, address, hobbies } = profile;

console.log(name, address, hobbies[0]);

// CLASSES