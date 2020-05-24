// 1. Defining Objects
const email = {
  bob: 'bob@gmail.com',
  jane: 'jane@walla.co.il',
  bill: 'crazypen@yahoo.com'
};

const details = {
  name: 'Peter Parker',
  alias: 'Spider-Man',
  appeared_in: 1962,
  friends: ['Superman', 'Batman']
};


// 2. Accessing Object Items
// print out bob's email
console.log(email['bob']);

// same as:
console.log(email.bob);

// change an email address
email.jane = 'jane@yahoo.com';

// add a new email
email.barbara = 'barbara@gmail.com';

let name = 'bob';
email[name] = `${name}@gmail.com`;

// 3. Delete Keys
delete email.jane;

// 4. Objects and Loops
for (let key of Object.keys(email)) {
    const value = email[name];
    console.log(`${key} => ${value}`);
}
