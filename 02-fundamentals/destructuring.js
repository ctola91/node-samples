let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    getName: function () {
        return `${this.name} ${this.lastName} - power: ${this.power}`;
    }
}

console.log(deadpool.getName());

// let name = deadpool.name;
// let lastName = deadpool.lastName;
// let power = deadpool.power;

// rename variable ex: name: firstName
let {
    name: firstName, lastName, power
} = deadpool;

console.log(firstName, lastName, power);