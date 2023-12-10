const myArr = [0, 1, 2, 3, 4, true, "rajani"];//can be number, string, mic=xed or anything

//array is object that store multiple items under single variable name and it's resizable. more elements can be added later on after previously defining them 

myArr.push(6);
myArr.push(7);//add value at last 
myArr.pop();//removes last value 
myArr.unshift(3)//add value at the start at first and shift the value or location of each arrays 
myArr.shift();//removes first value of the arrays
console.log(myArr.includes(6));//gives boolean value if it is present in the array or not 
console.log(myArr.indexOf(6));//gives the location value of the element in the array
console.log(myArr.join()); //converts the array to string and are seperated by comma 
//0,1,2,3,4,true,rajani

console.log(myArr); 
//[ 0, 1, 2, 3, 4, true, 'rajani' ]

console.log("A", myArr);

const myn1= myArr.slice(1,3)//gives the element only from the given range of the location but doesn't include the last range 

console.log("B", myn1);
console.log("c", myArr);

const myn2= myArr.splice(1,3)//gives the element only from the given range of the location and also include the last range and also removes them from the elements of the array  
console.log("d", myn1);
console.log("e", myArr);


