// Single Number
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// Given a non-empty array of integers nums, every element 
// appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime 
// complexity and use only constant extra space.

var singleNumber = function(nums) {
	let occurences = {};
	for(num of nums) {
		occurences[num] = occurences[num] + 1 || 1;
	}

	for(key of Object.keys(occurences)) {
		if(occurences[key] === 1) {
			return parseInt(key);
		}
	}
};

// Pretty smart bitwise or solution from leetcode discussion
// var singleNumber = function(nums) {
// 	let ans = nums[0];

// 	for(let i = 1; i < nums.length; i++) {
// 		ans ^= nums[i];
// 	}

// 	return ans;
// };

// My initial solution
// var singleNumber = function(nums) {
// 	let occurences = {};
// 	for(num of nums) {
// 		occurences[num] = occurences[num] + 1 || 1;
// 	}

// 	for(key of Object.keys(occurences)) {
// 		if(occurences[key] === 1) {
// 			return parseInt(key);
// 		}
// 	}
// };

module.exports = singleNumber;