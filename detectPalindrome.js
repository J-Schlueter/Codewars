//First attempt
function isPalidrome(x){
    let reversed = x.toLowerCase().split("").reverse()
    console.log(x,reversed)
    for (let i = 0; i < reversed.length; i++) {
        if (reversed[i] != x[i].toLowerCase()){
            return false
        };
    };
    return true ;
};

console.log(isPalidrome("oBbo"))

//bp answer
const bestIsPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }