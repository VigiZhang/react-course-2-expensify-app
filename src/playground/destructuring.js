//
// Object destructuring
//

// const person = {
//     name: 'Vigi', 
//     age: 28, 
//     location: {
//         city: 'Beijing',  
//         temp: 'Fangzhuang'
//     }
// };

// // default value: name = 'Anonymous'
// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age} years old.`);

// // rename prop: temp: community
// const { city: liveCity = 'Lanzhou', temp: community } = person.location;

// if (liveCity && community) {
//     console.log(`It's ${community} in ${liveCity}.`);
// }


// const book = {
//     title: 'Ego is the Enemy', 
//     author: 'Ryan Holiday', 
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//
// Array destructuring
//


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, small_price, medium_price, large_price] = item;
console.log(`A medium ${name} costs ${medium_price}.`);