const strongPasswordChecker = require('./index');

test('strongPasswordChecker function exists', () => {
	expect(typeof strongPasswordChecker).toEqual('function');
});

test('strongPasswordChecker function finds 5 missing steps', () => {
	const password = "a";
	expect(strongPasswordChecker(password)).toEqual(5);
});

test('strongPasswordChecker function finds 3 missing steps', () => {
	const password = "aA1";
	expect(strongPasswordChecker(password)).toEqual(3);
});

test('strongPasswordChecker function finds secure password', () => {
	const password = "1337C0d3"
	expect(strongPasswordChecker(password)).toEqual(0);
});