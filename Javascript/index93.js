let number = ['*','*','*','*','*','*','*','*','*','*','*']
let val = 10

do {
    number.shift('*')
    console.log(number)
    val = val - 1
} while (val>0) 