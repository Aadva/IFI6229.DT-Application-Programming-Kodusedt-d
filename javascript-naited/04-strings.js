const firstName = "Mari";

const text1 = 'Tere';
const text2 = "Tere";
const text3 = `Tere`;

console.log(text1);
console.log(text2);
console.log(text3);

console.log(firstName.length);

const messyName = "   Mari   ";

const cleanName = messyName.trim();

console.log(cleanName);

console.log(cleanName.toLowerCase());

const sentence = "Mulle meeldib JavaScript";

console.log(sentence.includes("JavaScript"));

const age = 22;

const greeting = `Tere, ${cleanName}! Sa oled ${age} aastat vana.`;

console.log(greeting);