let number = ['*','*','*','*','*','*','*','*','*','*','*']
let val = 10
while (val>0) {
    number.shift('*')
    console.log(number)
    val = val - 1
}