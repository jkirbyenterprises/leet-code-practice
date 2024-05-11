// Remove Duplicates from Sorted Array
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Given an integer array nums sorted in non-decreasing
// order, remove the duplicates in-place such that each
// unique element appears only once. The relative order
// of the elements should be kept the same. Then return
// the number of unique elements in nums.

// Consider the number of unique elements of nums to be
// k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function(nums) {
	if(nums.length < 2) return 1;
	let slow = 0;
	let fast = 1;
	
	while(fast < nums.length) {
		if(nums[slow] == nums[fast]) {
			nums.splice(slow, 1);
			slow--;
			fast--;
		} else {
			slow++;
			fast++;
		}       
	}
	return nums.length;
};

const nums = [1,1,2,3,3,4,4,4,5,6,7,7,7,8];
const duplicates = removeDuplicates(nums);
console.log(nums);
console.log(duplicates);

module.exports = removeDuplicates;