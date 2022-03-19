// given array of letters, see if we create a target string

let createRansom = function (arr,target) {
    //map our arr letter:count pairings
    let arrObj = new Object
    for (letter of arr){
        // arr[1] = a, letter = a
        // arr[2] = a, letter = a, arrObj[a] = 1
        if (arrObj[letter] !== undefined ){
            arrObj[letter]++
        } else {
            arrObj[letter] = 1
        }
    };
    // return arrObj
    //map target letter:count pairings
    let tarObj = new Object
    for (letter of target){
        // arr[1] = a, letter = a
        // arr[2] = a, letter = a, arrObj[a] = 1
        if (tarObj[letter] !== undefined ){
            tarObj[letter]++
        } else {
            tarObj[letter] = 1
        }
    };
    //compare the two pairings
    for (letter in tarObj) {
        if (tarObj[letter] > arrObj[letter]){
            return false
        }

    }
    return true
}

let arr = "alkjsdfaejpwoejfpojaposjdpuwr";
let target = "aaa";

console.log(createRansom(arr,target));