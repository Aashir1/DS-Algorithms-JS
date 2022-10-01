const rotate = (nums, k)=> {
    k = k % nums.length
    console.log('k: ', k)
    nums.unshift(...nums.splice(-k))
    
    // nums.unshift(...nums.splice(nums.length-k))
    // above logic was breaking for nums = [1, 2], k = 5
};