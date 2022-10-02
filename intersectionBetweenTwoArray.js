const intersect = (nums1, nums2) => {
    let num1Length = nums1.length, num2Length = nums2.length;
    let a = num1Length > num2Length ? nums2 : nums1;
    let b = num1Length > num2Length ? nums1 : nums2;
    let result = [];
    for(let i=0; i<b.length; i++){
        if(a.indexOf(b[i]) > -1){
            a.splice(a.indexOf(b[i]), 1);
            result.push(b[i]);
        }
    }
    return result;
};