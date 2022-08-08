//11.1. Functions without parameters First Task
const arrData = [11, 2, null, 0, 0, 3, 4, 50, 76, 88, 13, 'JavaScript'];

let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
function getArrayDiggitType(){
  for(let i = 0; i < arrData.length; i++ ){
    if(arrData[i] === 0){
      zeroCount += 1;
    } else if(typeof(arrData[i]) !== "number" || typeof(arrData[i]) === "NaN"){
       console.log(`${arrData[i]} - не число`);
    } else if (arrData[i] % 2 === 0) {
       evenCount += 1;
    } else {
      oddCount += 1;
    }
   }
    console.log(`${zeroCount} - кол-во нулей`);
    console.log(`${evenCount} - чётных чисел`);
    console.log(`${oddCount} - нечётных чисел`);
  }

getArrayDiggitType();