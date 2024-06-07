//Stack(Used for Primitive Datatypes)
let myname='Daksh'

let mysurname=myname

mysurname='Milesh'

console.log(myname);
console.log(mysurname);

//Heap(Used for Non Primitive Datatype)
let human1={
    email:'abc@gmail.com',
    age:24,
}

let human2=human1
human2.email='def@gmail.com'

console.log(human1);
console.log(human2);