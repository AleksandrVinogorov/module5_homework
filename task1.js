let value = +prompt("Введите число");
if(isNaN(value)) {
  alert("Упс, кажется, вы ошиблись")
} else if (typeof value !== "number") {
  alert("Упс, кажется, вы ошиблись")
} else if (typeof value == "number") {
  if (value % 2 === 0) {
  console.log('Ваше число четное')
  } else if (value % 1 === 0) {
    console.log('Ваше число нечетное')
  }
}

