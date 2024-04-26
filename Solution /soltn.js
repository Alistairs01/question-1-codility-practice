//Every string has the same length 
/**
 * You have an are of strings called stringsArray 
 * consisting of 5 strings
 * Every string has the same length 
 * Task is to find a pair of strings in the array 
 * such that there exists a point in which both of the strings 
 * have the same letter 
 * 
 * For example given stringsArray = ['abc','bca', 'dbe']
 * string 0 and string 2 have the same letter "b" in position 1
 */
/*
const stringsArray = ["abc", "bca", "dbe"];

function findCommonLetterPair(strings) {
    const length = strings[0].length;

    for (let i = 0; i < length; i++) {
        const letter = strings[0][i];

        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] === letter) {
                return [0, j]; // Found a pair with the same letter at position i
            }
        }
    }

    return null; // No pair found
}

const pair = findCommonLetterPair(stringsArray);
if (pair !== null) {
    console.log(`Pair found at indices ${pair[0]} and ${pair[1]}`);
} else {
    console.log("No pair found with common letters at the same position.");
}
findCommonLetterPair()

console.log (pair)
*/

function solution(s) {
    const n = s.length;
    const m = s[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = 0; k < m; k++) {
                if (s[i][k] === s[j][k]) {
                    return [i, j, k];
                }
            }
        }
    }

    return [];
}

// Test cases
console.log(solution(["abc", "bca", "dbe"])); // Output: [0, 2, 1]
console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"])); // Output: [0, 1, 3] or [1, 3, 0]
console.log(solution(["gr", "sd", "rg"])); // Output: [],
console.log(solution(["bdafg", "ceagi"])); // Output: [0, 1, 2]