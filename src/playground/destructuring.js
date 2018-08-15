// console.log("working");

// const person = {
//     name: "Andrew",
//     age: 33,
//     location: {
//         city: "Santiago",
//         temp: 14
//     }
// };

// const { name = "Anonymous", age } = person;


// console.log(`${name} is ${age} years old.`)

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
// console.log(`It's ${temperature}C in ${city}.`);
// }


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-published"} = book.publisher;

// console.log(publisherName);


const address = ["647 Mons Eyzaguirre", "Santiago", "RM", "22322"];

const [street, city, region = "RM", postcode] = address;

console.log(`You are in ${city}, ${region}`);

const item = ["coffee (hot)", "$2", "$3", "$4"];

const [product, small, medium, big] = item;

console.log(`A medium ${product} costs ${medium}`);
