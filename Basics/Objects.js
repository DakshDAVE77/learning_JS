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


//Singleton objects

const info={}

info.name="Daksh"
info.rollno="22BIT226"
info.age=19

console.log(info);

//Nesting Objects

const Bioda={
     name:{
        firstname:"hitesh",
        lastname:"Choudhary",
        Middlename:"Amit"
    }
}

console.log(Bioda);

//Merging Objects

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3= Object.assign({},obj1,obj2)

//Spread Operator
const obj3={...obj1,...obj2}

console.log(obj3);