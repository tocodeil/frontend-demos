// 1. Defining Objects
const email = {
    jane: 'jane@hotmail.com',
    bob: 'bob@gmail.com',
    dave: 'dave@gmail.com',
};

const details = {
    name: 'Peter Parker',
    appeared_in: 1962,
    friends: ['Superman', 'Batman'],
    alias: 'Spiderman',
};


// 2. Accessing Object Items
console.log(email['jane']);

// 3. Delete Keys
delete(email.bob);

// 4. Objects and Loops
for (let key of Object.keys(email)) {
    const val = email[key];
    console.log(`${key} has email: ${val}`);
}