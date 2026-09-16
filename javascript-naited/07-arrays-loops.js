const names = ["Mari", "Jüri", "Kati"];

console.log(names[0]);

console.log(names.length);

console.log(names.includes("Mari"));

names.push("Martin");

console.log(names);

names.pop();

console.log(names);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (const name of names) {
  console.log(name);
}

for (const name of names) {
  if (name === "Jüri") {
    break;
  }

  console.log(name);
}