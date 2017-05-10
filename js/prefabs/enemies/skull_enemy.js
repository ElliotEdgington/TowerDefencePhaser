/*
 * Skull enemies are all defined in this file
 * each skull enemy has a different trait and is
 * tinted a different color to differentiate them.
 */

var Botan = Botan || {};

Botan.SkullEnemy = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');
    this.name = "skullEnemy";
    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    //setting default stats
    this.hp = 3;
    this.speed = 40;
    this.gold_value = 40;
    this.scale.setTo(0.8);

};

Botan.SkullEnemy.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy.prototype.constructor = Botan.SkullEnemy;


////Red skull more health slower

////red enemy more health

Botan.SkullEnemy_Big = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');
    this.name = "skullEnemy_Big";
    
    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    //setting default stats
    this.scale.setTo(1.2);
    this.hp = 15;
    this.speed = 30;
    this.tint = 0xff0000;
    this.gold_value = 80;

};

Botan.SkullEnemy_Big.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy_Big.prototype.constructor = Botan.SkullEnemy_Big;


////blue skull less health faster

////blue enemy faster

Botan.SkullEnemy_Fast = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');
    this.name = "skullEnemy_Fast";
    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    
    //setting default stats

    this.hp = 2;
    this.speed = 140;
    this.gold_value = 20;
    this.scale.setTo(0.5);
    this.tint = 0x0000ff;
};

Botan.SkullEnemy_Fast.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy_Fast.prototype.constructor = Botan.SkullEnemy_Fast;

////Black skull less health faster

////Boss skull is slower but has a considerable amount of health

Botan.SkullEnemy_Boss = function(game){
    Botan.Enemy.call(this, game, 'skull_spr');
    this.name = "skullEnemy_Boss";
    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    
    //setting default stats

    this.hp = 65;
    this.speed = 30;
    this.gold_value = 180;
    this.scale.setTo(2.2);
    this.tint = 0x0f0f0f;
};

Botan.SkullEnemy_Boss.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy_Boss.prototype.constructor = Botan.SkullEnemy_Boss;


