let firstPerson;
let secondPerson;

firstPerson = ['gagan', 'singh', 'st. annes', '24'];
secondPerson = ['sam', 'jackson', 'pembina', '27'];

let caseOne = firstPerson.reduce(function (acc, curr) {
    return acc + curr
});

let caseTwo = secondPerson.reduce(function (acc, curr) {
    return acc + curr
});



if (caseOne === caseTwo) {
    return true
} else {
    return false
}