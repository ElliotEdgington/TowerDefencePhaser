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
};

Botan.CandyCornTower.prototype = Object.create(Botan.Tower.prototype);
Botan.CandyCornTower.prototype.constructor = Botan.CandyCornTower;


Botan.CandyCornTower.prototype.update = function(){  
    this.animations.play('idle');
    
    // fires bullet at intervals of the game timer
    // any firing logic goes here
    if((this.game.game_timer % this.fire_rate) == 0){
    console.log(this.game.game_timer);
        this.fire();
    }

};

//this holds all the firing logic
Botan.CandyCornTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    //change its properties if they're wrong
    if(bullet){
        bullet.loadTexture('candycorn_bullet_spr');
    }
};
