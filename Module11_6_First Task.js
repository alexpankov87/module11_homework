//11.6. Callbacks First Task

const intervalPrintNumber = function(num_fr, num_scd) {
    const timerIteration = setInterval(function(){
      if(num_fr <= num_scd){
      console.log(num_fr);
      num_fr++;
    } else {
      clearInterval(timerIteration);
    }
    },1000); 
  }
  
  intervalPrintNumber(5,15);