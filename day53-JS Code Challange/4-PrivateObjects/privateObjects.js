//Create a user object bu some properties of it should be secret

// const user = {
//     username: "Engin",
//     password: 1234,
//     Age: 34,

// }

const username = Symbol ("username");
const password = Symbol ("password")


// const user = {
//     username: "Engin",
//     password: "1234",
//     age: 34,
// }

// console.log(user.username);
// console.log(user.password);


//If you use [username] and [password] they will shown as undefined

const user = {
   [username]: "Engin",
    [password]: "1234",
    age: 34,
}

console.log(user.username);
console.log(user.password);