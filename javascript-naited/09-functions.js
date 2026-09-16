function greet(name) {
  return `Tere, ${name}!`;
}

const greeting = greet("Mari");

console.log(greeting);

function greetUser(name = "Kasutaja") {
  return `Tere, ${name}!`;
}

console.log(greetUser("Jüri"));

console.log(greetUser());

function add(a, b) {
  return a + b;
}

const answer = add(5, 3);

console.log(answer);

function showMessage() {
  console.log("Tere!");
}

showMessage();

function testFunction() {
  const number = 10;
}

console.log(testFunction());