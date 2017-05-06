// The base for all bullets in the game, the sprite and properties are 
// determined at creation by the object that creates it.

//can be inherited if needed by bullets with unique behaviour

// -- DO NOT COPY PASTA INHERIT FROM THIS PLEASE --

var Botan = Botan || {};

Botan.Bullet = function(game, x, y, bullet_spr){
    Phaser.Sprite.call(this, Botan.game, x, y, bullet_spr);
    this.game = game;
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);
    //default properties
    this.target = null;
    this.damage = 1;
    this.speed = 100;
    
};

Botan.Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Bullet.prototype.constructor = Botan.Bullet; 

Botan.Bullet.prototype.update = function(){

    if(this.target.exists){
        //move bullet toward the target
        this.game.physics.arcade.moveToObject(this, this.target,this.speed);
        this.rotation = this.game.physics.arcade.angleBetween(this, this.target) - 90;
        //check for collision with the target
        if(this.game.physics.arcade.overlap(this, this.target)){
            //kill bullet
            this.kill();
            //remove health from enemy
            this.target.health -= this.damage;
        }
    }
    else if(this.direction){
        if(this.game.physics.arcade.overlap(this,this.game.enemy_grp)){
            
        }
        this.game.physics.arcade.moveToXY(this, this.direction.x, this.direction.y, this.speed);
    }
};

Botan.Bullet.prototype.setTarget = function(target){
    this.target = target;
};

Botan.Bullet.prototype.setDirection = function(x, y){    
    this.direction = new Phaser.Point(x, y);
};