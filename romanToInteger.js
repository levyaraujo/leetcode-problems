function romanToInteger(s) {
	let map = {
		I:1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};


	let result = 0; // 1900

	for (let current = 0; current < s.length; current++) {
		if (map[s[current + 1]] == undefined) {
			result += map[s[s.length - 1]]
		}
		if (map[s[current]] >= map[s[current + 1]]) {
			result += map[s[current]];
		} else if (map[s[current]] < map[s[current + 1]]) {
			let subtraction = map[s[current + 1]] - map[s[current]]
			result += subtraction;
			current++;
		}
		
	}
	return result;
}

console.log(romanToInteger("LVIII"));
console.log(romanToInteger("III"));
console.log(romanToInteger("IV"));
console.log(romanToInteger("MCMXCIV"));
