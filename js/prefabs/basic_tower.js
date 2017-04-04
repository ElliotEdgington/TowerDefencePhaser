// template for future towers

var Botan = Botan || {};

Botan.BasicTower = function(game){
    var spr = 'basic_tower_spr';
    var x = 100;
    var y = 100;
    Botan.Tower.call(this, game, x, y, spr);
    
    //create unique properties for the tower.
    this.delay = 1;
    
    //maybe change this to a global timer? because many towers.
    Botan.game.time.events.loop(Phaser.Timer.SECOND, this.fire, this);

};

Botan.BasicTower.prototype = Object.create(Botan.Tower.prototype);
Botan.BasicTower.prototype.constructor = Botan.BasicTower;


Botan.BasicTower.prototype.update = function(){  
};

//this holds all the firing logic
Botan.BasicTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    //change its properties if they're wrong
};
