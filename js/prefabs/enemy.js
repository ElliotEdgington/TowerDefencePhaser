// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.Enemy = function(game, x, y, spr_name){
    Phaser.Sprite.call(this, game, x, y, spr_name);
    //setting default stats
    this.health = 10;
    this.speed = 1;
    
    //starting waypoint
    this.waypoint = 0;
};

Botan.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Enemy.prototype.constructor = Botan.Tower;

Botan.Enemy.prototype.MoveToNext = function(){  
};