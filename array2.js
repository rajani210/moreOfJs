const A = ["rajani", "hari", "raam"]
const B = ["carrot", "sausage", "cauliflower", "Me"]

A.push(B)
console.log(A);
 //this doesn't merge two arrays but gives one array inside of the other 
//[ 'rajani', 'hari', 'raam', [ 'carrot', 'sausage', 'cauliflower' ] ]
//and the array B is a single element for A 

const C = A.concat(B)
console.log(C);
//[ 'rajani', 'hari', 'raam', 'carrot', 'sausage', 'cauliflower', 'Me' ]
//this doesn't do like push. it merge the two array amd properly merge them 

const D = [...A, ...B] //works same as Doncat
console.log(D);

const N= [1,2,3,[4,5,6], 7,[6,8,[9,2]]]
const M= N.flat(Infinity) //somtimes these kind of situaation may be faced during array so flat helps to merge all of them for easiness. flat ko bhitra kati ko depth ma jani bhanerw define garni ho if you don't know just give infinity. 
console.log(M);


console.log(Array.isArray("rajani"));//asked if it is array
console.log(Array.from("rajani"));//makes array of each element of rajani
console.log(Array.from({name:"rajani"}));//just gives blank array so we have to define what is to be converted to array like keys or anything 

let f=2
let u=2
let g=2
let h=2

console.log(Array.of(f, u, g, h));//makes array of each element 
