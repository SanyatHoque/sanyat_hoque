let player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function (damage) {
        if (this.energy <= 0) {
            this.lives--;
            return;
        } else { this.energy -= damage }
    },
    recoverEnergy: function (energyUp) {
        if (this.energy >= 100) {
            return;
        } else { this.energy += energyUp }
    },
    loseLife: function () { this.lives-- },
    recoverLife: function () {
        if (this.lives > 99) {
            return;
        } this.lives++
    }
};

player.name = 'Gagan';
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);