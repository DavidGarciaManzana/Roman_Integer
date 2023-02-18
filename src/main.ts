let romanToInt = (s: string): number => {
    let result: number = 0;
    const hashTable: { [key: string]: number } = {};
    const addToTheHash = (i: number) => {
        if (!hashTable[s[i]]) {
            hashTable[s[i]] = 1
        } else {
            hashTable[s[i]] += 1
        }
    }
    const checkLetter = (letter: string, add: number, i: number) => {
        if (s[i - 1] == letter) {
            result += add
            delete hashTable[s[i - 1]];
        } else {
            addToTheHash(i)
        }
    }

    const sumNumbersInHash = (letter: string, value: number = 1) => {
        if (hashTable[letter]) {
            result += hashTable[letter] * value
        }
    }

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] == "I") {
            addToTheHash(i)
        } else if (s[i] == "V") {
            checkLetter("I", 4, i)
        } else if (s[i] == "X") {
            checkLetter("I", 9, i)
        } else if (s[i] == "L") {
            checkLetter("X", 40, i)
        } else if (s[i] == "C") {
            checkLetter("X", 90, i)
        } else if (s[i] == "D") {
            checkLetter("C", 400, i)
        } else if (s[i] == "M") {
            checkLetter("C", 900, i)
        }
    }
    sumNumbersInHash("I")
    sumNumbersInHash("V", 5)
    sumNumbersInHash("X", 10)
    sumNumbersInHash("L", 50)
    sumNumbersInHash("C", 100)
    sumNumbersInHash("D", 500)
    sumNumbersInHash("M", 1000)

    return result
}


// Testing

// console.log(romanToInt("MCMXCIV")) //1994
// console.log(romanToInt("IV")) //4
// console.log(romanToInt("CMXCIX")) //999
// console.log(romanToInt("MMMCCCXCIX")) //3399
// console.log(romanToInt("XXIX")) //29
// console.log(romanToInt("LVIII")) //58
// console.log(romanToInt("III")) //3