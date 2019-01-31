//CLASSES
//constructor special method that runs automatticly when you instantiate an object from a class
//properties and methods of a class
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log('ran');
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }

}

const person1 = new Person('john', 33);
const person2 = new Person('sara', 28);

console.log(person1)
console.log(person2.greet());

// Subclasses
// extend another class

class Customer extends Person {
    constructor(name,age,balance){
        super(name,age);                // ??? super? part of parent constructor
        this.balance=balance
    }

    info() {
        return `${this.name} owes $${this.balance}.00`;
    }
}


const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.info());


// MODULES

// file 1 (file1.js)

export const name = "Jeff"

export default Person; // notice difference in export default line 58



// file 2 (file2.js)
// ./ = same folder
// ../ = up a folder

import { name } from './file1'

import Person from './file1'; // notice difference in import default line 48

console.log(name) // would give jeff 