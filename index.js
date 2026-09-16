const users = [
  { id: 1, name: "Mari", age: 22, active: true, address: { city: "Tallinn" } },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true }
];


console.log("Kõik kasutajate nimed:");
users.forEach((user) => { // forEach käib massiivi ükshaaval läbi
  console.log(user.name);
});


const activeUsers = users.filter((user) => user.active === true); // filter loob uue massiivi kõikidest kellel active on true

console.log("Aktiivsed kasutajad:");
console.log(activeUsers);

const adultUsers = users.filter((user) => user.age >= 18); // filter loob uue massiivi kõikidest kasutajatest kes on vähemalt 18 aastased, kasutades selleks >= tingimust

console.log("Vähemalt 18-aastased kasutajad:");
console.log(adultUsers);

const userNames = users.map((user) => user.name); // mapiga tekitame uue massiivi võttes algsest massiivist ainult nimed

console.log("Ainult kasutajate nimed:");
console.log(userNames);

const userById = users.find((user) => user.id === 3); // find käib läbi users massiivi, et leida kasutaja kelle ID on 3 kasutades selleks tingimust ===

console.log("Kasutaja id-ga 3:");
console.log(userById);

function getUserStatus(user) { // kontrollib kas kasutaja on aktiivne või mitte, kui kasutaja on aktiivne returnib Aktiivne kui ei returnib mitteaktiivne
  if (user.active) {
    return "Aktiivne";
  }

  return "Mitteaktiivne";
}

console.log("Kasutaja staatus:");
console.log(getUserStatus(users[0]));

const getGreeting = (user) => // arrow function võtab kasutaja andmed 
  `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`; // template literaliga prindime tervituse nime ja vanusegga

console.log("Tervitus:");
console.log(getGreeting(users[0]));

const { name, age } = users[0]; // destructuringuga võtame usersist nime ja vanuse

console.log("Destructuring:");
console.log(`Nimi: ${name}, vanus: ${age}`);


const newUser = { // tekitame uue kasutaja
  id: 6,
  name: "Karl",
  age: 24,
  active: true
};

const usersWithNewUser = [...users, newUser]; // kasutame spreadi, et panna vanad kasutajad ja uus kasutaja ühte masiivi

console.log("Uus massiiv koos Karliga:");
console.log(usersWithNewUser);

console.log("Linn optional chainingu abil:");
console.log(users[0].address?.city); // optional chaininguga linna lugemine kui address on olemas

console.log("Kasutaja linn või varutekst:"); 
console.log(users[1].address?.city ?? "Linn puudub"); // nullish coalescinguga varuteksti kasutamine kui aadressi pole

console.log("Kasutajad ja nende staatus:");

users.forEach((user) => { // forEach käib massiivi ükshaaval läbi ja prindib kasutaja nime ja staatuse
  console.log(`${user.name} – ${getUserStatus(user)}`);
});

usersWithNewUser.sort((a, b) => a.age - b.age);

console.log(usersWithNewUser);