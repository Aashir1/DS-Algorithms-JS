const slidingWindowMaxSum = (nums, size) => {
    let currSum = 0;
    let maxSum = -Infinity;
    
    for(let i=0; i<nums.length; i++){
        currSum += nums[i];
        if(i >= size-1){
            maxSum = Math.max(currSum, maxSum);
            currSum = currSum - nums[i-(size-1)]
        }
    }
    return maxSum;
}

let nums = [1, 2, 3, 5, 4, 8, 6, 2];
console.log('maxSum: ',  slidingWindowMaxSum(nums, 3));