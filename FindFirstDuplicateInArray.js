const findDuplicate = function(nums) {
    const map = {};
    for(let i=0; i<nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
            return nums[i];
        }
    }
};

// with O(n)