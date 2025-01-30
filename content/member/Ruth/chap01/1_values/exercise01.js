function calculator(){

}
console.log(calculator(5, 10, "add")); // Output: 15

console.log(calculator("5", "10", "multiply")); // Output: 50 // Warning: Type coercion occurred: "5" (string → number), "10" (string → number).

console.log(calculator("abc", 10, "subtract")); // Output: Error: Invalid input: both operands must be numbers or coercible to numbers.

console.log(calculator(5, "20", "divide")); // Output: 0.25 // Warning: Type coercion occurred: "20" (string → number).

console.log(calculator("30", 10, "add")); // Output: 40 // Warning: Type coercion occurred: "30" (string → number).

console.log(calculator(50, " is a number", "add")); // Output: "50 is a number" // Warning: Type coercion occurred: 50 (number → string). // Note: Implicit coercion resulted in string concatenation.

console.log(calculator(40, 30, "add")); // Output: 70

console.log(calculator(100, "1", "add")); // Output: "100 apples" // Warning: Type coercion occurred: 101 (number → string). // Note: Implicit coercion resulted in string concatenation.