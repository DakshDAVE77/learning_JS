//object literals
//use mdn for documentation
const user={
    name:'Daksh',
    age:19,
    email:'daksh@gmail.com',
    isLoggedIN: false,
    newSym: Symbol("Daksh")

}

console.log(user["email"]);//Correct way to access the datatype
console.log(typeof user.newSym);
console.log(typeof user["newSym"]);

console.log(user.hasOwnProperty('is human'))// To check wheather the property is present or not