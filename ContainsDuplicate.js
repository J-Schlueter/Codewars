var removeDuplicates = function(nums) {
    //sort the array O(n log n)
    nums.sort((a,b)=>{return b-a});
    //loop through and compare each number to the previous number, if the same return true O(n)
    for (i =0; i < nums.length; i++){
        if (i > 0 && nums[i-1] === nums[i]) return true;
    };
    return false;
};


let conversion = function(nums) {
    console.log(nums);
    let arrToSet = new Set(nums);
    console.log(arrToSet);
    let setToArr = [arrToSet];
    console.log(setToArr)
};

conversion([1,1,2,3,4,4])