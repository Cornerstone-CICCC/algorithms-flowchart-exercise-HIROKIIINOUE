const a = 25;
const b = 28;
const c = 20;
let result;

if (a + b > c || a + c > b || b + c > a) {
  result = "possible";
} else {
  result = "impossible";
}

console.log(`Triangle is ${result}`);
