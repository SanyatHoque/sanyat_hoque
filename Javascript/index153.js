let arithmetic = {
    add: function (num1, num2) {
        if (num1 === 'string' && num2 === 'string') {
            return `Please enter a number`
        } else { return num1 + num2 }
    },
    subtract: function (num1, num2) {
        if (num1 === 'string' && num2 === 'string') {
            return `Please enter a number`
        } else return num1 - num2
    },
    multiply: function (num1, num2) {
        if (num1 === 'string' && num2 === 'string') {
            return `Please enter a number`
        } else return num1 * num2
    },
    divide: function (num1, num2) {
        if (num1 === 'string' && num2 === 'string') {
            return `Please enter a number`
        } else return num1 / num2
    },
    remainder: function (num1, num2) {
        if (num1 === 'string' && num2 === 'string') {
            return `Please enter a number`
        } else return num1 % num2
    }
};

console.log(arithmetic.add(2, 10));
console.log(arithmetic.subtract(10, 5));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.remainder(20, 2));