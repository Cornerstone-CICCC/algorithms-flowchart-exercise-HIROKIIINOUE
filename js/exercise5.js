const studentName = "John";
const marks = 80;
let grade;

if (marks >= 80) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 40) {
  grade = "C";
} else {
  grade = "No Grade";
}

console.log(`${studentName}'s grade is ${grade}`);
