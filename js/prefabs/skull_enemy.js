// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.SkullEnemy = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');

    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    //setting default stats
    this.hp = 15;
    this.speed = 40;
    this.gold_value = 20;
    this.scale.setTo(0.8);

};

Botan.SkullEnemy.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy.prototype.constructor = Botan.SkullEnemy;


////Red skull more health slower

////red enemy more health

Botan.SkullEnemy_Big = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');

    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    //setting default stats
    this.scale.setTo(1.2);
    this.hp = 30;
    this.speed = 30;
    this.tint = 0xff0000;
    this.gold_value = 50;

};

Botan.SkullEnemy_Big.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy_Big.prototype.constructor = Botan.SkullEnemy_Big;


////blue skull less health faster

////blue enemy faster

Botan.SkullEnemy_Fast = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');

    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    
    //setting default stats

    this.hp = 7;
    this.speed = 140;
    this.gold_value = 10;
    this.scale.setTo(0.5);
    this.tint = 0x0000ff;
};

Botan.SkullEnemy_Fast.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy_Fast.prototype.constructor = Botan.SkullEnemy_Fast;



