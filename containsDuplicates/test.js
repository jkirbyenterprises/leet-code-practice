const containsDuplicates = require('./index');

test('containsDuplicates function exists', () => {
	expect(typeof containsDuplicates).toEqual('function');
});

test('containsDuplicates finds duplicates', () => {
	const nums = [1,2,3,1];
	expect(containsDuplicates(nums)).toEqual(true);
});

test('containsDuplicates finds no duplicates', () => {
	const nums = [1,2,3,4];
	expect(containsDuplicates(nums)).toEqual(false);
});

test('containsDuplicates finds multiple duplicates', () => {
	const nums = [1,1,1,3,3,4,3,2,4,2]
	expect(containsDuplicates(nums)).toEqual(true);
});