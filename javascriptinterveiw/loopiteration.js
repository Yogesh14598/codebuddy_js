
// sum of the first n fibonacci numbers.
const number = 6;
let n1=0, n2=1, nextTerm, sum=0;


for(let i=1; i<=number; i++){ 
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
    console.log(n1); // 1, 1,2,3,5,8
    sum= sum+ n1;

}
console.log(sum); //20



