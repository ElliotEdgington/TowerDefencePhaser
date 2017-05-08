// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.GhostEnemy = function(game){
    Botan.Enemy.call(this, game, 'ghost_spr');
    
    
    //enemy animations
    this.animations.add('down', [ 0, 1, 2, 3],7,true);
    this.animations.add('up', [ 4, 5, 6, 7],7,true);
    this.animations.add('right', [ 8, 9, 10 ,11],7,true);
    this.animations.add('left', [ 12, 13, 14, 15],7,true);
    this.animations.play('down');

    
    //setting default stats
    this.hp = 8;
    this.speed = 60;
    this.gold_value = 100;
    
};

Botan.GhostEnemy.prototype = Object.create(Botan.Enemy.prototype);
Botan.GhostEnemy.prototype.constructor = Botan.GhostEnemy;
