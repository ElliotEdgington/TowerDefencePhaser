// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.SkullEnemy = function(game, x, y){
    Botan.Enemy.call(this, game, x, y, 'skull_spr');

    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],7,true);
    
    
    //setting default stats
    this.health = 15;
    this.speed = 1;
    
    this.scale.setTo(0.8);
};

Botan.SkullEnemy.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy.prototype.constructor = Botan.SkullEnemy;


