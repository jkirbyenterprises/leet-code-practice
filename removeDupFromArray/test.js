const removeDuplicates = require('./index');

function getArray() {
	return [1,1,2,3,3,4,4,4,5,6,7,7,7,8];
}

function getNoDuplicatesArray() {
	return [1,2,3,4,5,6,7,8];
}

test('removeDuplicates function exists', () => {
	expect(typeof removeDuplicates).toEqual('function');
});

test('removeDuplicates return number of unique elements', () => {
	const arr = getArray();
	const noDupsArr = getNoDuplicatesArray();
	expect(removeDuplicates(arr)).toEqual(noDupsArr.length);
});

test('removeDuplicates removes duplicates', () => {
	const arr = getArray();
	const noDupsArr = getNoDuplicatesArray();
	removeDuplicates(arr);
	expect(arr).toEqual(noDupsArr);
});