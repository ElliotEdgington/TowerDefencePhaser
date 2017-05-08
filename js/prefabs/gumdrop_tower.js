// High Damage slow tower

var Botan = Botan || {};

Botan.GumDropTower = function(game, x, y){
    var spr = 'gumdrop_tower_spr';
    Botan.Tower.call(this, game, x, y, spr);
    
    //tower animations
    this.animations.add('idle', [ 0, 1, 2, 3, 4, 5, 6,7],8,true);
    
    //create unique properties for the tower.
    this.tower_damage = 5;
    this.range = 500;
    this.fire_rate = 600;
    this.price = 300;
};

Botan.GumDropTower.prototype = Object.create(Botan.Tower.prototype);
Botan.GumDropTower.prototype.constructor = Botan.GumDropTower;


Botan.GumDropTower.prototype.update = function(){ 
    this.animations.play('idle');
    
    // fires bullet at intervals of the game timer
    // any firing logic goes here
    if((this.game.game_timer % this.fire_rate) == 0){
        this.fire();
         
    }
};


//this holds all the firing logic
Botan.GumDropTower.prototype.fire = function(){
    //get bullet to be fired
    
    var bullet = this.createBullet();
    
    //change its properties if they're wrong
    if(bullet){
        bullet.loadTexture('gumdrop_bullet_spr');
        bullet.damage = this.tower_damage;
        bullet.speed = 80;
        bullet.scale.setTo(0.7);
    }
    
};


