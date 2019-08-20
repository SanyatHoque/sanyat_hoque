function getUserID() {
    let numb = 10
    return numb;
}
function isUserValid() {
    if (getUserID()>30) {
        return true
    } else {
        return false
    }
}
if (isUserValid()==true) {
    console.log("User Valid")
} else {
    console.log("User not valid")
}
