//11.7. Functions in ES6 First Task 

let n = 7;
let x = 5;

const DiggitDegree = (x, n) => {
  let result = x;
  
  for(let i = 1; i < n; i++){
    result *= x;
  }
  return result;
};

console.log(DiggitDegree(x, n));