const singleNumber = require('./index');

test('singleNumber function exists', () => {
	expect(typeof singleNumber).toEqual('function');
});

test('singleNumber function finds sequential duplicates', () => {
	const nums = [2,2,1];
	expect(singleNumber(nums)).toEqual(1);
});

test('singleNumber function finds non-sequential duplicates', () => {
	const nums = [4,1,2,1,2];
	expect(singleNumber(nums)).toEqual(4);
});

test('singleNumber function returns when only one number', () => {
	const nums = [1];
	expect(singleNumber(nums)).toEqual(1);
});