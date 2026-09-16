const age = 20;
const loggedIn = true;

console.log(age === 20);
console.log(age !== 18);
console.log(age > 18);
console.log(age < 30);
console.log(age >= 18);
console.log(age <= 20);

console.log(5 == "5");
console.log(5 === "5");

console.log(age >= 18 && loggedIn);

console.log(age < 18 || loggedIn);

console.log(!loggedIn);

if (age >= 18 && loggedIn) {
  console.log("Täisealine kasutaja on sisse logitud.");
} else if (age >= 18) {
  console.log("Kasutaja on täisealine, aga pole sisse logitud.");
} else {
  console.log("Kasutaja on alaealine.");
}

const message = age >= 18 ? "Täisealine" : "Alaealine";

console.log(message);

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));