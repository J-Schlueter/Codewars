/* 
Description:
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/


let test = 'abcdefghijk';
let test2 = 'abcdefghijkl';


function mySolution(str){
    let Res = []
     if (str.length % 2 === 0) {
       for (var i = 0, charsLength = str.length; i < charsLength; i += 2) {
        Res.push(str.substring(i, i + 2));
    }
     } else {
         let underScore = `${str}_`
       for (var i = 0, charsLength = underScore.length; i < charsLength; i += 2) {
       Res.push(underScore.substring(i, i + 2));
        }
     }
      
      return Res
    }

mySolution(test);
mySolution(test2);



function bestSolution(s){
    return (s+"_").match(/.{2}/g)||[]
 }

bestSolution(test);
bestSolution(test2);

/* TAKEAWAYS:
first exposure to .substring and .match
seek to understand .match and regex
*/