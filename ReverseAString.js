// For this task, you'll need to write a method that reverses a string. Your method will receive one argument, a string, and be expected to output that string with its letters in reverse order.

// Input: "hi"
// Output: "ih"

// Input: "catbaby"
// Output: "ybabtac"
// Do not call any type of built-in reverse method!

// Please solve the problem using iteration.

// Use the language of your choosing. We've included starter files for some languages where you can pseudocode, explain your solution and code

// recieve a string argument,
let reverseString = function(str) {
    // intialize a result variable,
    let result = [];
    let chars = str.split('')
    // starting at the end of the string create a negative loop that ends at zero,
    for (let i = chars.length - 1; i > -1; i--) {
        // adding each letter to the result array,
        result.push(chars[i]);
    }
    return result.join("")
};



// return result.toString

console.log(reverseString("fox"));
console.log(reverseString("hi"));
console.log(reverseString("catbaby"));

// Here is a codewars solution to a similar problem without the restriction of no reverse method, and including symbols in test cases with the desired result of no symbols.
// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');