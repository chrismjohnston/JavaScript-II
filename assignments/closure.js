// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHello(name) {
  let text = 'Hello ' + name;
  let say = function() {
    console.log(text)
  }
  return say;
}

let say2 = sayHello('Chris');
say2();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (lambda = 0) => {
  // Return a function that when invoked increments and returns a counter variable.
  let value = lambda;
  return function counter(){
  value += 1;
  console.log(value);
  return value;
}
};

const newCounter = counter();
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  console.log(counter);
  let increase = () => counter += 1;
  let decrease = () => counter -= 1;
  let resObj = {increase , decrease};
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return resObj;
};

let dino = counterFactory();

console.log(dino.increase())
console.log(dino.decrease())