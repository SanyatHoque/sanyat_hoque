// let firstNumber = 3
// let secondNumber = 5
function biggerNumber(firstNumber,secondNumber) {
    if (firstNumber>secondNumber) {
    return console.log(firstNumber,'is bigger than',secondNumber)   
    } else if (firstNumber<secondNumber) {
        return console.log(firstNumber,'is lesser than',secondNumber)   
    } else if (firstNumber==secondNumber) {
        return console.log(firstNumber,'is equals to',secondNumber)   
    }
}

biggerNumber(10,10)