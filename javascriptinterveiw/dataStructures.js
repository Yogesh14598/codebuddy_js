// remove all even numbers from an Array
const array =[1, 3, 4, 6, 7, 8];
let geteven = array.filter((n) => {
    return n%2 !==0;
});


console.log(geteven);  //[1, 3, 7] 


//Replace to uppercase 

let string =  'Elie';

console.log(string.toUpperCase());  //ELIE

// find max number 

let maxnum = [1, 3, 4, 6, 7, 8, 2, 5];

const maxoutput = maxnum.reduce(function(max,curr){
if(curr>max){
    max=curr;
}
return max;
}, 0)

console.log(maxoutput); //8 