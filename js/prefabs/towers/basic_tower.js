/*
 * -- NOT IMPLEMENTED IN THE GAME --
 * This is a copy paste template that we can use if other
 * towers need to be implemented into the game.
 */
var Botan = Botan || {};

Botan.BasicTower = function(game){
    Botan.Tower.call(this, game, x, y, spr);
};

Botan.BasicTower.prototype = Object.create(Botan.Tower.prototype);
Botan.BasicTower.prototype.constructor = Botan.BasicTower;


Botan.BasicTower.prototype.update = function(){  
    if((this.game.game_timer % this.fire_rate) == 0){
        this.fire();
    }
};

Botan.BasicTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    //change its properties if they're wrong
    if(bullet){
        
    }
};
