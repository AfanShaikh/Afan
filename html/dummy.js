// dummy.js

// Print message to console
console.log("Welcome to the Dummy JS File!");

// Dummy data
const users = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Function to greet a user
function greetUser(user) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

// Loop through all users and greet them
users.forEach(greetUser);

// Add two numbers
function add(a, b) {
  return a + b;
}

// Multiply two numbers
const multiply = (a, b) => a * b;

// Call the functions
console.log("Addition of 5 + 3 =", add(5, 3));
console.log("Multiplication of 5 * 3 =", multiply(5, 3));

// Dummy event simulation
function simulateClickEvent() {
  console.log("Button clicked!");
}

// Simulate a button click
simulateClickEvent();

// Set a timeout
setTimeout(() => {
  console.log("This message appears after 2 seconds.");
}, 2000);

// Dummy object with method
const calculator = {
  square(n) {
    return n * n;
  },
  cube(n) {
    return n * n * n;
  },
};

console.log("Square of 4:", calculator.square(4));
console.log("Cube of 2:", calculator.cube(2));
