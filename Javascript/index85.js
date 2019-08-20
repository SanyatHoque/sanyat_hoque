let f0 = 0
let f1 = 1
let fn = []
do {
    f = f0+f1
    fn.push(f)
    console.log(f)
    f0 = f1
    f1 = f 
}
while (f1<20) 

console.log(fn)