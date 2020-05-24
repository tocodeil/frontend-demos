// 1. Defining Objects
const email = {
    bill: "bill@gmail.com",
    jane: "jane@gmail.com",
    mike: "sales@gmail.com",
    martha: "sales@gmail.com",
};

const x = {
    isHappy: true,
    hobbies: ['ski', 'sushi', 'netflix'],
}

// 2. Accessing Object Items
console.log(email.bill);

const name = 'bill';
console.log(email[name]);

email.bill = 'bill@yahoo.com';

email.ricky = 'ricky@gmail.com';

// 3. Delete Keys
delete email.bill;

// 4. Objects and Loops
for (let key of Object.keys(email)) {
    const val = email[key];
    console.log(`${key} => ${val}`);
}