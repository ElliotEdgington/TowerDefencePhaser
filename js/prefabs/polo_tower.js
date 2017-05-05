// Slowing tower

var Botan = Botan || {};

Botan.PoloTower = function(game){
    var spr = 'polo_tower_spr';
    var x = 200;
    var y = 600;
    Botan.Tower.call(this, game, x, y, spr);
    
    //tower animations
    this.animations.add('idle', [ 0, 1, 2, 3, 4, 5, 6, 7],8,true);
    
    
    //create unique properties for the tower.
    this.delay = 1;
    
    //maybe change this to a global timer? because many towers.
    Botan.game.time.events.loop(Phaser.Timer.SECOND, this.fire, this);

};

Botan.PoloTower.prototype = Object.create(Botan.Tower.prototype);
Botan.PoloTower.prototype.constructor = Botan.PoloTower;


Botan.PoloTower.prototype.update = function(){  
    this.animations.play('idle');
};

//this holds all the firing logic
Botan.PoloTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    //change its properties if they're wrong
    if(bullet){
        bullet.loadTexture('polo_bullet_spr');
    }
    
};
