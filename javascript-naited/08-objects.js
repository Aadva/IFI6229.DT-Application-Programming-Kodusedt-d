const user = {
  name: "Mari",
  age: 22,
  active: true,

  address: {
    city: "Tallinn"
  }
};

console.log(user.name);

console.log(user["age"]);

user.email = "mari@example.com";

console.log(user);

user.age = 23;

console.log(user.age);

console.log(user.address.city);

console.log(user.phone);

console.log(user.address?.city);

console.log(user.contact?.phone);

console.log(user.contact?.phone ?? "Telefon puudub");

const score = 0;

console.log(score ?? 10);

console.log(score || 10);