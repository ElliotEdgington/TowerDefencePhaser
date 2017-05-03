// template for future towers

var Botan = Botan || {};

Botan.CandyCornTower = function(game){
    var spr = 'candycorn_tower_spr';
    var x = 200;
    var y = 200;
    Botan.Tower.call(this, game, x, y, spr);
    
    //tower animations
    this.animations.add('idle', [ 0, 1, 2, 3, 4, 5, 6, 7],10,true);
    
    
    //create unique properties for the tower.
    this.delay = 1;
    
    //maybe change this to a global timer? because many towers.
    Botan.game.time.events.loop(Phaser.Timer.SECOND, this.fire, this);

};

Botan.CandyCornTower.prototype = Object.create(Botan.Tower.prototype);
Botan.CandyCornTower.prototype.constructor = Botan.CandyCornTower;


Botan.CandyCornTower.prototype.update = function(){  
    this.animations.play('idle');
};

//this holds all the firing logic
Botan.CandyCornTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    //change its properties if they're wrong
    bullet.Sprite = "candycorn_bullet_spr";
};
