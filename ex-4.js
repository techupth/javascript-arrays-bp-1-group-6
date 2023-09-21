// Exercise #4 Debugging (Object)

// Start coding here
const student = {
  name: "John Doe",
  grade: 12,
  subjects: ["Math", "Science", "History"],
};

// console.log(Array.isArray(student)); //false //

student['age'] = 18; //หรือ student.age = 18 ก็ได้
// console.log(student); //check age in object //

console.log("'"+"Student Name: " + student.name+"'"); //'Student Name: John Doe'
console.log("'"+"Student Age: " + student.age+"'"); //'Student Age: 18'
console.log("'"+"Student Grade: " + student.grade+"'"); //'Student Grade: 12'
console.log("'"+"Student Subjects: " + student.subjects+"'"); //'Student Subjects: Math,Science,History'
