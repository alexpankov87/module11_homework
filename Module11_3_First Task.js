//11.3. Parameters and return value First Task

function ArgResult(number) {
    if (!Number.isInteger(number) || number < 2 || number >= 1000) {
      return "Данные неверны";
    }                   
    let j = Math.sqrt(number);
    for (let i = 2; i <= j; i++)
        if (number % i === 0) return "Не простое число";
    return "Простое число";
}

console.log(ArgResult(1000));
console.log(ArgResult(7));