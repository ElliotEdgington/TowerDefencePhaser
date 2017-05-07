// High Damage slow tower

var Botan = Botan || {};

Botan.GumDropTower = function(game, x, y){
    var spr = 'gumdrop_tower_spr';
    var x = 200;
    var y = 400;
    Botan.Tower.call(this, game, x, y, spr);
    
    //tower animations
    this.animations.add('idle', [ 0, 1, 2, 3, 4, 5, 6,7],8,true);
    
    //create unique properties for the tower.
<<<<<<< HEAD
    this.tower_price = 300;
=======
    
>>>>>>> bb98ad117f336c2a753be957bf93a998fb83594a
};

Botan.GumDropTower.prototype = Object.create(Botan.Tower.prototype);
Botan.GumDropTower.prototype.constructor = Botan.GumDropTower;




Botan.GumDropTower.prototype.update = function(){ 
    this.animations.play('idle');
    
    // fires bullet at intervals of the game timer
    // any firing logic goes here
<<<<<<< HEAD
    this.fire_rate = 200;
=======
    this.fire_rate = 250;
>>>>>>> bb98ad117f336c2a753be957bf93a998fb83594a
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
        bullet.damage = 3;
<<<<<<< HEAD
=======
        bullet.scale.setTo(0.7);
>>>>>>> bb98ad117f336c2a753be957bf93a998fb83594a
    }
    
};


