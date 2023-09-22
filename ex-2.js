// Exercise #2: Editing Employee Array
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1].name;
employees[1].hobbies.push("Watching basketball");
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

const updateEmployees = employees;
const Alicia = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
};
const Kody = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
};
updateEmployees.push(Alicia, Kody);

console.log(updateEmployees); //แสดงผล updateEmployees

employees.pop(Kody);

console.log(employees);
console.log(updateEmployees); //ไม่แสดงผล Kody
