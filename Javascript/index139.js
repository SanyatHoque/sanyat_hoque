let i = 0 
let arr1=[]
let arr2=[]
while (i<=100) {
    if (i%2==0) {
        arr1.push(i)
    } else if (i%2!==0) {
        arr2.push(i)
    }
    i=i+1
}
// console.log(arr1)
// console.log(arr2)
let j=0
function iseven(value) {
    while (j<=20) {
        if (value%2==0) {
            j=j+1
        return (value)
        } else {
            j=j+1
        }
    }
}
let newArr = arr1.filter(iseven);
console.log(newArr)

// let k=0
// function isodd(value) {
//     while (k>=0) {
//         if (value%2!==0) {
//             k=k+1
//         return (value)
//         } else {
//             k=k+1
//         }
//         k=k+1
//     }
// }
// let newArr = arr1.filter(isodd);
// console.log(newArr)