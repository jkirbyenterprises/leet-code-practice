// Rotate Array
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// Given an integer array nums, rotate the array to the right
// by k steps, where k is non-negative.

var rotate = function(nums, k) {
	nums.reverse();
	while(k > nums.length) {
		k-=nums.length;
	}
	const piece = nums.splice(k);
	nums.reverse();
	piece.reverse();
	nums.push(...piece);
};

// Solution based on leet code hint suggesting reversing part of array
// var rotate = function(nums, k) {
// 	nums.reverse();
// 	while(k > nums.length) {
// 		k-=nums.length;
// 	}
// 	const piece = nums.splice(k);
// 	nums.reverse();
// 	piece.reverse();
// 	nums.push(...piece);
// };


// My first solution, leet code said it took too long
// var rotate = function(nums, k) {
// 	for(let index = 0; index < k; index++) {
// 		nums.unshift(nums.pop());
// 	}
// };

module.exports = rotate;