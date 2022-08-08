//11.4. Higher order functions First Task
function FirstArgFunc(firstDigg) {
    function SecondArgFunc(secondDigg){
      return firstDigg + secondDigg
    };
    return SecondArgFunc(4);
  }
  
  const result = FirstArgFunc(5);
  
  console.log(result);
