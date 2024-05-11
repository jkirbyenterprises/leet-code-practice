// Contains Duplicate
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every
// element is distinct.

var containsDuplicates = function(nums) {
	const seenBefore = {};
	for(num of nums) {
		if(seenBefore[num] !== undefined) return true;
		seenBefore[num] = num;
	};
	return false;
};

module.exports = containsDuplicates;