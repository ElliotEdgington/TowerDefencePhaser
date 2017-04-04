// The base for all bullets in the game, the sprite and properties are 
// determined at creation by the object that creates it.

//can be inherited if needed by bullets with unique behaviour

var Botan = Botan || {};

Botan.Bullet = function(x, y, bullet_spr){
    Phaser.Sprite.call(this, Botan.game, x, y, bullet_spr);
    //default properties
    this.speedX = 1;
    this.speedY = 1;
};

Botan.Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Bullet.prototype.constructor = Botan.Bullet; 

Botan.Bullet.prototype.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
    
    if(this.y >= 500){
        this.kill();
    }
}