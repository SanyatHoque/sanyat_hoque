var1 = "game of thrones"
firstChar  = var1.charAt(0)
secondChar = var1.charAt(5)
thirdChar  = var1.charAt(8)

console.log(firstChar)
result = firstChar.concat(secondChar).concat(thirdChar).toUpperCase()
console.log("result: ",result)
console.log(`it thinks space is a value: "${var1.charAt(100)}"`)