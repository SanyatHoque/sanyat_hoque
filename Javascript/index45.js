const playerName = 'Patrik Laine is lame';
const team1 = "New Jersey Devils" 
const team2 = "New York Rangers"
const team3 = "Winnipeg jets" 
const team4 = "Pittsburgh Penguins"

const messageVar = "Winnipeg is the best Canadian city, Go Winnipeg"
ex1 = playerName.slice(0,15)
ex2 = team3.slice(9,15)
ex21 = messageVar.slice(11,20)
ex3 = messageVar.slice(36,39)
ex4 = ex1.concat(ex2).concat(ex21)
console.log(ex1,"\n",ex2,"\n",ex21,"\n",ex3,"\n",ex4," player",ex3,ex2,"!!");