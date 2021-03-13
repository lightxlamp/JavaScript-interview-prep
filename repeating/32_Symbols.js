let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// Direct access to symbols works
console.log("...");
console.log("Direct: " + user[id] );