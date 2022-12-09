let x;
x =  NaN;
let message = typeof(x) == "number"  && (!isNaN(x)) ? console.log("Число") : 
typeof(x) == "string" ?  console.log("Строка") :
typeof(x) == 'boolean' ? console.log("логический тип"):
console.log("Тип не определен");
console.log(message)
