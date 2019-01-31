// CONST & LET
// Let can be manipulated
// Const = Think Constant 
// If a const has Let variables, changing the let is permissable, changing the const value will result in error
// const can have items 'pushed' to it like item to an array
let name = 'John';
name = 'johnny';

const person = {
    name:'JohnJohn',
    age:33
};

console.log(person)

const nums=[9,23,33,91];
nums.push(11);
console.log(nums)

// ARROW FUNCTIONS

function sayHello(){
    console.log('Hey Viseth')
}
  
sayHello();