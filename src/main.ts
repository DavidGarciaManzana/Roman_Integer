let romanToInt = (s: string): number => {
    let result: number = 0;
    const hashTable: { [key: string]: number } = {};
    const addToTheHash = (i:number) => {
        if (!hashTable[s[i]]) {
            hashTable[s[i]] = 1
        } else {
            hashTable[s[i]] += 1
        }
    }

    for (let i: number = 0; i < s.length; i++) {

        switch (s[i]) {

            case "I": {
                addToTheHash(i)
                break;
            }

            case "V": {
                if (s[i - 1] == "I") {
                    result += 4
                    delete hashTable[s[i - 1]];
                } else {
                    addToTheHash(i)
                }
                break;
            }

            case "X": {
                if (s[i - 1] == "I") {
                    result += 9
                    delete hashTable[s[i - 1]];
                } else {
                    addToTheHash(i)
                }
                break;
            }

            case "L": {
                if (s[i - 1] == "X") {
                    result += 40
                    delete hashTable[s[i - 1]];
                } else {
                    addToTheHash(i)
                }
                break;
            }

            case "C": {
                if (s[i - 1] == "X") {
                    result += 90
                    delete hashTable[s[i - 1]];
                } else {
                    addToTheHash(i)
                }
                break;
            }

            case "D": {
                if (s[i - 1] == "C") {
                    result += 400
                    delete hashTable[s[i - 1]];
                } else {
                    addToTheHash(i)
                }
                break;
            }

            case "M": {
                if (s[i - 1] == "C") {
                    result += 900
                    delete hashTable[s[i - 1]];
                } else {
                    addToTheHash(i)
                }
                break;
            }
        }
    }

    if (hashTable["I"]) {
        result += hashTable["I"]
    }
    if (hashTable["V"]) {
        result += (hashTable["V"]) * 5
    }

    if (hashTable["X"]) {
        result += (hashTable["X"]) * 10
    }
    if (hashTable["L"]) {
        result += (hashTable["L"]) * 50
    }
    if (hashTable["C"]) {
        result += (hashTable["C"]) * 100
    }
    if (hashTable["D"]) {
        result += (hashTable["D"]) * 500
    }
    if (hashTable["M"]) {
        result += (hashTable["M"]) * 1000
    }

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