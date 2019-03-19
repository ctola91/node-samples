// function add(a, b) {
//     return a + b;
// }

// let add = (a, b) => {
//     return a + b;
// }

let add = (a, b) => a + b;

console.log(add(10, 20));

// let greet = () => 'Hello World';

let greet = name => `Hello ${name}`;

console.log(greet('christian'));


let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    getName: function () {
        return `${this.name} ${this.lastName} - power: ${this.power}`;
    }
}

console.log(deadpool.getName());