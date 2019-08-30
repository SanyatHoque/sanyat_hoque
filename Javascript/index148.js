let superhero = {};

superhero.name = 'Batman';
superhero.secretName = 'Bruce';
superhero.sideKick = ['Robin', 'Alfred', 'Gordon'];
superhero.strength = 70;

console.log(superhero.name);
console.log(superhero.secretName);
console.log(superhero.sideKick);
console.log(superhero.strength);

console.log(superhero.speed);

superhero['speed'] = 80;

console.log(superhero.speed);