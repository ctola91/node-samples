let name = 'Deadpool';
let real = 'Wade Winston';

// console.log(name + ' ' + real);
// console.log(`${name } ${real}`);

// let completeName = name + ' ' + real;
// let templateName = `${name} ${real}`;

// console.log(templateName === completeName);

function getName() {
    return `${name} ${real}`;
}

console.log(`El nombre del objeto es: ${getName()}`);