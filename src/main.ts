// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].




let romanToInt = (s: string): number => {
    const hashTable: { [key: string]: number } = {};
    let result: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        if (i == 0) {
            hashTable[s[i]] = 0
            // console.log(hashTable)
        }

        switch (s[i]) {

            case "I": {
                break;
            }
            case "V": {
                if (s[i - 1] == "I") {
                    result += 4
                    delete hashTable[s[i - 1]];
                } else {
                    hashTable[s[i]] += 1
                }
                break;
            }
            case "X": {
                if (s[i - 1] == "I") {
                    result += 9
                    delete hashTable[s[i - 1]];
                } else {
                    hashTable[s[i]] += 1
                    // console.log(hashTable)
                }
                break;
            }
            case "L": {
                if (s[i - 1] == "X") {
                    result += 40
                    delete hashTable[s[i - 1]];
                } else {
                    hashTable[s[i]] += 1
                }
                break;
            }
            case "C": {
                if (s[i - 1] == "X") {
                    result += 90
                    delete hashTable[s[i - 1]];
                } else {
                    if(!hashTable[s[i]]){
                        hashTable[s[i]] = 1
                    } else {
                        hashTable[s[i]] += 1
                    }
                    
                    console.log(hashTable)
                }
                break;
            }
            case "D": {
                if (s[i - 1] == "C") {
                    result += 400
                    delete hashTable[s[i - 1]];
                } else {
                    hashTable[s[i]] += 1
                    
                }
                break;
            }
            case "M": {
                if (s[i - 1] == "C") {
                    result += 900
                    delete hashTable[s[i - 1]];
                } else {
                    hashTable[s[i]] += 1
                }
                break;
            }

        }

    }
    console.log(hashTable,result)

    if (hashTable["I"]) {
        result += hashTable["I"] + 1
    }


    if (hashTable["V"]) {
        // console.log("aaaa")
        result += (hashTable["V"] ) * 5
    }

    if (hashTable["X"]) {
        result += (hashTable["X"] ) * 10
    }
    if (hashTable["L"]) {
        // console.log((hashTable["L"] ) * 50)
        result += (hashTable["L"] ) * 50
    }
    if (hashTable["C"]) {
        result += (hashTable["C"] ) * 100
    }
    if (hashTable["D"]) {
        result += (hashTable["D"] ) * 500
    }
    if (hashTable["M"]) {
        result += (hashTable["M"] ) * 1000
    }
    
    return result
}


// Testing

console.log(romanToInt("MCMXCIV")) //1994
console.log(romanToInt("IV")) //4
console.log(romanToInt("CMXCIX")) //999
console.log(romanToInt("MMMCCCXCIX")) //3399
console.log(romanToInt("XXIX")) //29

// console.log(romanToInt("LVIII")) //58
// console.log(romanToInt("III")) //3