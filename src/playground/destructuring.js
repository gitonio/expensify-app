//
// Object
//


const person = {
//    name: 'Andrew',
    age: 26,
    location: {
        city: 'San Diego',
        temp: 92
    }
};

const { name: firstName = 'anon', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);


const {city, temp } = person.location;

if (person.location.city && person.location.temp) {
console.log(`It's ${person.location.temp} in ${person.location.city}.`);
}

if (city && temp) {
    console.log(`It's ${temp} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holidy',
    publisher: {
        //name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

//
// Array
//
 
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania','191147'];
const [street, city2, state, zip] = address;
console.log(`You are in ${address[1]} ${address[2]}`);

console.log(`You are in ${city2}, ${state}`);

const item = ['Coffee','$2','$2.5','$3'];
const [bev,sm, med, lg] = item;

console.log('a medium coffee costs $2.5');
console.log(`a medium ${bev} costs ${med}`);