
let numberList = [];
let tenthNumber = 0;
let eleven1 = 0;
let lastNumberString = null;
let seven = 0;
let nine = 0;


const randomNumber = () => {


    for (let i = 0; i < 9; i++) {


        if (i == 0) {
            number = Math.floor(Math.random() * 3) + 1
            numberList.push(number)
        } else {
            number = Math.floor(Math.random() * 10)
            numberList.push(number)
        }

        if ((i % 2) == 0) {
            seven = seven + numberList[i]
            eleven1 = seven * 8
        } else if (i != 9) {
            nine = nine + numberList[i]
        }

    };


    const sum = numberList.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    lastNumberString = sum.toString().slice(-1)

    tenthNumber = (nine * 9 + seven * 7).toString().slice(-1)
    numberList.push(parseInt(tenthNumber))


    eleven1 = eleven1.toString().slice(-1)


    if (parseInt(eleven1) == parseInt(lastNumberString)) {
        numberList.push(parseInt(eleven1))
        console.log(numberList.join(''))

        // Creates and writes the created number to tc.txt file
        // const fs = require("fs")
        // fs.writeFileSync("tc.txt", numberList.join(""), "utf-8")



    } else {
        console.log("last numbers are not equal, regenerating numbers...")
        setTimeout(() => {
            numberList = [];
            tenthNumber = 0;
            eleven1 = 0;
            lastNumberString = null;
            seven = 0;
            nine = 0;
            randomNumber()
        }, 700)
    }



}

randomNumber();

