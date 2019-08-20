let arr = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit']
let i = 0
let arr1 = []
arr.forEach(function(arrMutant,ind) {
    if (arrMutant=="Iceman") {
        arr1.push(arrMutant)
    } else if (arrMutant=="Logan") {
        arr1.push(arrMutant)
    } else if (arrMutant=="Phoenix") {
        arr1.push(arrMutant)
    }
    console.log(arrMutant)
})
console.log(arr1)
