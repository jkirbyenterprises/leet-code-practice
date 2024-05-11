// Strong Password Checker
// https://leetcode.com/problems/strong-password-checker/

// A password is considered strong if the below conditions are 
// all met:

// It has at least 6 characters and at most 20 characters.
// It contains at least one lowercase letter, at least one 
// uppercase letter, and at least one digit.
// It does not contain three repeating characters in a row 
// (i.e., "Baaabb0" is weak, but "Baaba0" is strong).

// Given a string password, return the minimum number of steps
// required to make password strong. if password is 
// strong, return 0.

// In one step, you can:

// Insert one character to password,
// Delete one character from password, or
// Replace one character of password with another character.

var strongPasswordChecker = function(password) {
	const minLengthStepsNeeded = (password.length < 6) ? 6 - password.length : 0;
	const maxLengthStepsNeeded = (password.length > 20) ? 20 - password.length : 0;
    const lowercaseStepsNeeded = password.match(/([a-z])/g)?.length > 0 ? 0 : 1;
    const uppercaseStepsNeeded = password.match(/([A-Z])/g)?.length > 0 ? 0 : 1;
    const numberStepsNeeded = password.match(/([0-9])/g)?.length > 0 ? 0 : 1;
	let repeatedCharacterStepsNeeded = 0;

	let lastChar = '';
	let numRepeats = 0;
	for(let char of password) {
		if(char === lastChar) {
			numRepeats++;
			console.log(`${char} repeated, Num Repeats: ${numRepeats}`);
		} else {
			console.log(`${char}`);
			numRepeats = 0;
		}

		if(numRepeats >= 2) {
			repeatedCharacterStepsNeeded++;
		}

		lastChar = char;
	}

	console.log(`${password} Length Steps Needed: ${minLengthStepsNeeded + maxLengthStepsNeeded} Lowercase Steps Needed: ${lowercaseStepsNeeded} Uppercase Steps Needed: ${uppercaseStepsNeeded} Number Steps Needed: ${numberStepsNeeded} Repeated Char Steps Needed ${repeatedCharacterStepsNeeded}`);

	// let totalStepsNeeded = 0;

	let totalStepsNeeded = lowercaseStepsNeeded + uppercaseStepsNeeded + numberStepsNeeded;

	// since the type of character steps can fix the min length only add the remainder
	totalStepsNeeded += minLengthStepsNeeded - totalStepsNeeded;

	totalStepsNeeded += maxLengthStepsNeeded + repeatedCharacterStepsNeeded;

	return totalStepsNeeded;
};

// const password = "Baaabb0"
// const password = "Baaabbb0"
// const password = "1337C0d3"
// const password = "a";
// const password = "aA1";
// const password = "aaaB1"
// const result = strongPasswordChecker(password);
// console.log(result);

module.exports = strongPasswordChecker;