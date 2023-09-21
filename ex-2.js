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
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

console.log(alex); //Alex
console.log(alexHobbies); //["Cryptocurrency","Socail media"]
console.log(alexAndJamesAge); //65

const updateEmployees = employees;

let alicia = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping","Reading novels"]
};

let kody = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games","Wakeboard"]
}
updateEmployees.push(alicia,kody); //เพิ่ม Alicia,Kody เข้าไปใน updateEmployees เพื่อ update

console.log(updateEmployees); //show name,age,hobbies ทั้ง 4 คน
//console.log(employees); //show name,age,hobbies 2 คน