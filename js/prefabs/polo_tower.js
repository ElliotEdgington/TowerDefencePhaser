// Slowing tower

var Botan = Botan || {};

Botan.PoloTower = function(game, x, y){
    var spr = 'polo_tower_spr';
    Botan.Tower.call(this, game, x, y, spr);
    
    //tower animations
    this.animations.add('idle', [ 0, 1, 2, 3, 4, 5, 6, 7],8,true);
    
    //set properties for this tower
    this.price = 300;
    this.range = 200;
    this.tower_damage = 1;
    this.fire_rate = 300;
};

Botan.PoloTower.prototype = Object.create(Botan.Tower.prototype);
Botan.PoloTower.prototype.constructor = Botan.PoloTower;


Botan.PoloTower.prototype.update = function(){  
    this.animations.play('idle');
    
    
    // fires bullet at intervals of the game timer
    // any firing logic goes here
    
    if((this.game.game_timer % this.fire_rate) == 0){
        this.fire();
    }
};

//this holds all the firing logic
Botan.PoloTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    
    //change its properties if they're wrong
    if(bullet){
        bullet.loadTexture('polo_bullet_spr');
        bullet.damage = this.tower_damage;
        bullet.scale.setTo(0.8);
        bullet.slow = true;
    }
    
};
