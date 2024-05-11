const rotate = require('./index');

test('rotate function exists', () => {
	expect(typeof rotate).toEqual('function');
});

test('rotate works with 2 steps', () => {
	const nums = [-1,-100,3,99], k = 2
	const expectedNums = [3,99,-1,-100];
	rotate(nums, k);
	expect(nums).toEqual(expectedNums);
});

test('rotate works with 3 steps', () => {
	const nums = [1,2,3,4,5,6,7], k = 3;
	const expectedNums = [5,6,7,1,2,3,4];
	rotate(nums, k);
	expect(nums).toEqual(expectedNums);
});