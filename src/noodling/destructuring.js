const person = {
    name: 'Taylor',
    age: 28,
    location: {
        city: 'Osaka',
        temp: 50
    }
};

// ES6 Object destructuring
// Same effect as two lines below
const { name, age } = person;

// const name = person.name
// const age = person.age
console.log(`${person.name} is ${person.age}.`)

// // Pull nested attributes off of an object
// const { city, temp } = person.location
// console.log(`It's ${temp} in ${city}`)

const book = {
    title: 'Lord of the Rings',
    author: 'JRR Tolkien',
    publisher: {
        name: 'Penguin',
    }
};

// sets default name to publisherName 
// And sets default value to 'self published'
const {name: publisherName = 'self published'} = book.publisher
console.log(publisherName)

const address = ['125 Lockhart lane', 'Los altos', 'california', '94022'];
console.log(`you are in ${address[1]}`)
const [street, city, state, zip] = address;
console.log(`you are in ${city} ${state} `);

const menu = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, , medium, ] = menu

console.log(`a medium ${coffee} costs ${medium}`)