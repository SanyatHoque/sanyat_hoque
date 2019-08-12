let userAndPassword = "pepito2017,12345"

let username = userAndPassword.substr(0,10)
// let New = userAndPassword.split(',')
// let New2 = New.length
console.log(username)
let password = userAndPassword.substr(11,5)
console.log(password,`\nthe user ${username} has ${password} as password`)