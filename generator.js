
let numberList = [];
let tenthNumber = 0; // calculated by odd and even Indexes
let firstEleventhNumber = 0; // calculated by oddIndexes
let secondEleventhNumber = null; // calculated by first 10 number 
let oddIndexes = 0; // 1, 3, 5, 7, 9'th numbers
let evenIndexes = 0; // 2, 4, 6, 8,'th numbers


const generate = () => {


    for (let i = 0; i < 9; i++) {


        if (i == 0) {
            number = Math.floor(Math.random() * 3) + 1
            numberList.push(number)
        } else {
            number = Math.floor(Math.random() * 10)
            numberList.push(number)
        }

        if ((i % 2) == 0) {
            oddIndexes = oddIndexes + numberList[i]
            firstEleventhNumber = oddIndexes * 8
        } else if (i != 9) {
            evenIndexes = evenIndexes + numberList[i]
        }

    };


    const sum = numberList.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    secondEleventhNumber = sum.toString().slice(-1)

    tenthNumber = (evenIndexes * 9 + oddIndexes * 7).toString().slice(-1)
    numberList.push(parseInt(tenthNumber))


    firstEleventhNumber = firstEleventhNumber.toString().slice(-1)


    if (parseInt(firstEleventhNumber) == parseInt(secondEleventhNumber)) {
        numberList.push(parseInt(firstEleventhNumber))
        console.log(numberList.join(''))

        // Creates and writes the created number to tc.txt file
        // const fs = require("fs")
        // fs.writeFileSync("tc.txt", numberList.join(""), "utf-8")



    } else {
        console.log("last numbers are not equal, numbers are regenerating...")
        setTimeout(() => {
            numberList = [];
            tenthNumber = 0;
            firstEleventhNumber = 0;
            secondEleventhNumber = null;
            oddIndexes = 0;
            evenIndexes = 0;
            generate()
        }, 700)
    }



}

generate();

