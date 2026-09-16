const user = {
  name: "Mari",
  age: 22,
  active: true
};

const { name, age } = user;

console.log(name);
console.log(age);

const colors = ["punane", "sinine", "roheline"];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

const names = ["Mari", "Jüri"];

const newNames = [...names, "Kati"];

console.log(names);
console.log(newNames);

const updatedUser = {
  ...user,
  age: 23
};

console.log(user);
console.log(updatedUser);

const person = {
  name: "Martin"
};

person.name = "Karl";

console.log(person);

const originalUser = {
  name: "Mari",

  address: {
    city: "Tallinn"
  }
};

const copiedUser = {
  ...originalUser
};

console.log(copiedUser);