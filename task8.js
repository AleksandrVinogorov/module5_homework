let states = new Map();
states.set("Германия", 83695430);
states.set("Австралия", 25969600);
states.set("Франция", 68084341);
states.set("Дания", 5848669);

const keysValue = () => {
  states.forEach((value, key) => {
    console.log(`Ключ - ${key} Значение - ${value}`)
  })
}

keysValue()