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

let alex = employees[1].hobbies.push("Watching basketball");;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

      console.log(employees[1].hobbies)
      console.log(alexHobbies)
      console.log(alexAndJamesAge)

const updateEmployees = employees;
const Alicia = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
};
      employees.push(Alicia); 

const Kody = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
};
      employees.push(Kody);
      console.log(updateEmployees);

      updateEmployees.pop()
      console.log(updateEmployees);