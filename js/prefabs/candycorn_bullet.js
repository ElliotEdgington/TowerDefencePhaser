// The base for all bullets in the game, the sprite and properties are 
// determined at creation by the object that creates it.

//can be inherited if needed by bullets with unique behaviour

var Botan = Botan || {};

Botan.CandyCornBullet = function(game, x, y, candycorn_bullet_spr){
    Phaser.Sprite.call(this, Botan.game, x, y, candycorn_bullet_spr);
    
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    //default properties
    this.speed = 100;
    
};

Botan.CandyCornBullet.prototype = Object.create(Phaser.Sprite.prototype);
Botan.CandyCornBullet.prototype.constructor = Botan.CandyCornBullet; 

Botan.CandyCornBullet.prototype.update = function(){
    if(this.target){
        this.game.physics.arcade.moveToObject(this, this.target,this.speed);
    }
    else if(this.direction){
        this.game.physics.arcade.moveToXY(this, this.direction.x, this.direction.y, this.speed);
    }
    
    if(this.y >= 500){
        this.kill();
    }
};

Botan.CandyCornBullet.prototype.setTarget = function(target){
    this.target = target;
};

Botan.CandyCornBullet.prototype.setDirection = function(x, y){    
    this.direction = new Phaser.Point(x, y);
};