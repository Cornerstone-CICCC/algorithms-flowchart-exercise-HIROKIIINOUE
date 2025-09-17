const num1 = 25;
const num2 = 28;
const num3 = 20;
let result;

if (num1 > num2) {
  if (num1 > num3) {
    result = num1;
  } else {
    result = num3;
  }
} else {
  if (num2 > num3) {
    result = num2;
  } else {
    result = num3;
  }
}

console.log(`${result} is the largest`);
