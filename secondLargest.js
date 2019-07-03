function getSecondLargest(nums) {
    // Complete the function
    let secondLargest = nums[0];
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        }
        else if(nums[i]>secondLargest && nums[i]!=largest)
            secondLargest = nums[i];
    }
    return secondLargest;
}

console.log(getSecondLargest([5, 3, 6, 6, 2]))