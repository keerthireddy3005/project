const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); 
console.log(secondColor); 
const personWithDefault = { name: "Bob" };
const { name: personName, age = 30 } = personWithDefault;

console.log(personName);  
console.log(age);     