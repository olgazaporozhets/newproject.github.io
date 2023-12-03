
//Task 1
console.log("Hello World!"); // English
console.log("Hallo, Welt!"); // German
console.log("Pryvit, svit!"); // Ukrainian
console.log("Czesc, swiat!"); // Polish
// I can add more languages later

//Task2
console.log("I'm awesome");

//Task3
let x;
console.log("the value of x will be: undefined");
console.log("the actual value of x is: " + x);
x = 42;
console.log("the value of x will be: 42");
console.log("the actual value of x is: " + x);

//Task4
let y = "Hello, World!"
console.log("the value of my string will be: 'Hello, World!'")
console.log("the actual value of y is: " + y)
y = "I am learning programming!";
console.log("the value of my string will be: 'I am learning programming!'")
console.log("the actual value of y is: " + y)

//Task5
let z = 7.25
console.log("z:", z);
let a = Math.round(z);
console.log("a:", a);
let highestValue = Math.max(z, a);
console.log("The highest value is:", highestValue);

//Task6
let animals = [];
console.log("The value of the 'animals' array is currently an empty array.");
console.log("animals:", animals);
let favoriteAnimals = ['cat', 'dog', 'elephant', 'penguin'];
console.log("favoriteAnimals:", favoriteAnimals);
favoriteAnimals.push('baby pig');
console.log("favoriteAnimals with Daan's favorite animal:", favoriteAnimals);

//Task7
let myString = "this is a test";
console.log(myString);
let lengthOfString = myString.length;
console.log("The length of myString is:", lengthOfString);

//Task8
// 8.1 Declare at least four variables with different data types.
let variable1 = 3;            // Number
let variable2 = "Hello";      // String
let variable3 = true;         // Boolean
let variable4 = [1, 2, 3];     // Array

// 8.2 For each variable, write a console.log statement that logs the value.
console.log("The value of variable1 is: " + variable1);
console.log("The value of variable2 is: " + variable2);
console.log("The value of variable3 is: " + variable3);
console.log("The value of variable4 is: " + JSON.stringify(variable4));

// 8.3 Explain in words the expected types of the variables.
console.log("Variable1 is expected to be a Number.");
console.log("Variable2 is expected to be a String.");
console.log("Variable3 is expected to be a Boolean.");
console.log("Variable4 is expected to be an Array.");

// 8.4 Use typeof to log the actual type of the variables.
console.log("The type of variable1 is: " + typeof variable1);
console.log("The type of variable2 is: " + typeof variable2);
console.log("The type of variable3 is: " + typeof variable3);
console.log("The type of variable4 is: " + typeof variable4);

// 8.5 Compare the types of different variables and log the result.
if (typeof variable1 === typeof variable2 &&
    typeof variable2 === typeof variable3 &&
    typeof variable3 === typeof variable4) {
  console.log('SAME TYPE');
} else {
  console.log('NOT THE SAME TYPE');
}

//Task9
// Assuming x is declared elsewhere in your code, you don't need to use 'let' again.
// Remove the 'let' keyword to avoid the 'Identifier 'x' has already been declared' error.

// Given value of x
x = 7;

// Show the initial value of x
console.log("Initial value of x: " + x);

// Explain what the % (modulo) operator does
console.log("The % (modulo) operator gives the remainder when x is divided by 3.");

// Show the result of x % 3 without assigning it back to x
console.log("Result of x % 3 without assignment: " + (x % 3));

// Update the value of x using x % 3
x = x % 3;

// Show the new value of x after the operation x = x % 3
console.log("New value of x after x = x % 3: " + x);

//Task10
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
let mixedArray = [42, "Hello", true, { key: "value" }];

// Log the array to show that it contains multiple types
console.log("Array with multiple types:", mixedArray);

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
let result1 = 6 / 0;
let result2 = 10 / 0;

// Log the results and compare them
console.log("Result of 6/0:", result1);
console.log("Result of 10/0:", result2);

if (result1 === result2) {
  console.log("6/0 is equal to 10/0");
} else {
  console.log("6/0 is not equal to 10/0");
}



