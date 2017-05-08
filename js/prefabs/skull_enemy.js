// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.SkullEnemy = function(game, x, y){
    Botan.Enemy.call(this, game, x, y, 'skull_spr');

    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],18,true);
    this.animations.play('move');
    
    //setting default stats
    this.health = 20;
    this.speed = 40;
    this.gold_value = 100;
    this.scale.setTo(0.8);

};

Botan.SkullEnemy.prototype = Object.create(Botan.Enemy.prototype);
Botan.SkullEnemy.prototype.constructor = Botan.SkullEnemy;


////Red skull more health slower

////red enemy more health

//Botan.SkullEnemy2 = function(game, x, y){
//    Botan.Enemy.call(this, game, x, y, 'skull_spr');
//
//    //enemy animations
//    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],7,true);
//    
//    
//    //setting default stats
//    this.health = 20;

//    this.speed = 0.8;
//    
//    this.scale.setTo(1);
//    this.tint = #ff0000;

//    this.speed = 1;
//    this.tint = #ff0000;
//    this.gold_value = 50;

//};
//
//Botan.SkullEnemy2.prototype = Object.create(Botan.Enemy.prototype);
//Botan.SkullEnemy2.prototype.constructor = Botan.SkullEnemy2;
//

////blue skull less health faster

////blue enemy faster

//Botan.SkullEnemy3 = function(game, x, y){
//    Botan.Enemy.call(this, game, x, y, 'skull_spr');
//
//    //enemy animations
//    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],7,true);
//    
//    
//    //setting default stats

//    this.health = 20;
//    this.speed = 2;
//    
//    this.scale.setTo(0.5);
//    this.tint = #0000ff;
//};
//
//Botan.SkullEnemy3.prototype = Object.create(Botan.Enemy.prototype);
//Botan.SkullEnemy3.prototype.constructor = Botan.SkullEnemy3;
//
//

//    this.health = 10;
//    this.speed = 2;
//    this.tint = #0000ff;
//    this.gold_value = 50;
//    this.scale.setTo(0.5);
//};
//
//Botan.SkullEnemy3.prototype = Object.create(Botan.Enemy.prototype);
//Botan.SkullEnemy3.prototype.constructor = Botan.SkullEnemy3;

