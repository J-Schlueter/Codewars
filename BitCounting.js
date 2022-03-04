/* PROBLEM:
Write a function that takes an integer as input,
 and returns the number of bits that are equal to one in the binary representation of that number.
  You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// let countBits = function(n) {
//     (n >>> 0).toString(2) this only converts the number to a binary expression
    
//   };

function countSetBits(n) //expect parameter of n for Integer number being passed in
  {
    var count = 0; //intialize our counter variable
    while (n) 
    {
      count += n & 1; //count is being assigned the value of adding count to the result of (n & 1) if n is 1 that would result in a 1 else 0
      n >>= 1;
    }
    return count;
  }

  /* Takeaways: conceptually the problem was easy to understand
   convert an integer to binary and then evaluate the binary expression to 
   find all the 1 bits and sum them.

   This was my first exposure to bitwise operators or radix.
   So after some googling and documentation reading I have this solution
   This solution passed the set test and most random tests but failed once the passed argument was in the hundreds of millions or billions

   I'm not sure if there is an issue with the test or if there is a more efficient solution in missed.
   */

   // YOUTUBE SOLUTION
var countBits = function(n)  {
    const setBits = n.toString(2).match(/1/g);
    return setBits ? setBits.length : 0;
  };

  // BEST PRACTICE SOLUTION
  countBits = n => n.toString(2).split('0').join('').length;