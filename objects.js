//singleton is a object defined just once and cannot be changed or manipulated 
//object literal is the properties defined of an object seperated by comma 

// "Object.create"
 //this is called constructor method and just to create a singleton object
const mySym = Symbol("key1")

const A={
    name:"Rajani", 
    age:22,
    [mySym]:"Key1",//this is how a symbol key os defined
    "full name":"Rajani Shrestha",
    location:"Chitwan",
    email: "stharajani910@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday", "sunday"]
} //object literals or keys

console.log(A.email);
console.log(A["email"]);//ways objects cam be accessed 
console.log(A["full name"]);
console.log(A[mySym]);//this is how a symbol is ran

A.email= "jhaszkfjbvskd"//this is how keys of objects are overwritten 

// Object.freeze(A);
//this is how objects are locked so that their values can never be changed in future.

A.greeting= function(){
    console.log("Hello js function")
}
console.log(A.greeting());

A.greetingTwo= function(){
    console.log(`Hello js function, ${this["full name"]}`)
}
console.log(A.greetingTwo());