// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.GhostEnemy = function(game, x, y){
    Botan.Enemy.call(this, game, x, y, 'ghost_spr');
    
    
    //enemy animations
    this.animations.add('down', [ 0, 1, 2, 3],7,true);
    this.animations.add('up', [ 4, 5, 6, 7],7,true);
    this.animations.add('right', [ 8, 9, 10 ,11],7,true);
    this.animations.add('left', [ 12, 13, 14, 15],7,true);
    
    //setting default stats
    this.health = 10;
    this.speed = 1;
<<<<<<< HEAD
    this.gold_value = 25;
=======
    this.gold_value = 100
>>>>>>> bb98ad117f336c2a753be957bf93a998fb83594a
    
};

Botan.GhostEnemy.prototype = Object.create(Botan.Enemy.prototype);
Botan.GhostEnemy.prototype.constructor = Botan.GhostEnemy;
