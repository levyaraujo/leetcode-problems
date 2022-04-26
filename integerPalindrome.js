/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/


function isPalindrome(x) {
	const originalNumber = x;
	let reversedNumber = 0;

	if (Math.sign(x) == -1) {
		x = Math.abs(x)
		while (x != 0) {
			let remainder = x % 10;
			reversedNumber = reversedNumber * 10 + remainder
			x = Math.floor(x / 10)
		}
		reversedNumber= reversedNumber + '-'
	}

	while (x != 0) {
		let remainder = x % 10;
		reversedNumber = reversedNumber * 10 + remainder
		x = Math.floor(x / 10)
	}

	return originalNumber === reversedNumber
}