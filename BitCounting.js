/* PROBLEM:
Write a function that takes an integer as input,
 and returns the number of bits that are equal to one in the binary representation of that number.
  You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

let countBits = function(n) {
    let bin = (n >>> 0).toString(2)
   
     
    
  };


  /* Takeaways: conceptually the problem was easy to understand
   convert an integer to binary and then evaluate the binary expression to 
   find all the 1 bits and sum them.

   This was my first exposure to bitwise operators or radix.
   I certainly learned a lot trying to find a solution to the 
   */