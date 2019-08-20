let numbArr = []
let numb = 0
    while (numb<40) {
    if (numb%2==0 && numbArr.length<20) {
    numbArr.push(numb)
    } 
    numb = numb+1
    }
    console.log("length of array",numbArr.length,"array",numbArr)
