// An object for each tower to inherit off, this will hold behaviours
// that exist bewtween all towers

var Botan = Botan || {};

Botan.Tower = function(game, x, y, spr_name){
    Phaser.Sprite.call(this, Botan.game, x, y, spr_name);
    this.game = game;
};

Botan.Tower.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Tower.prototype.constructor = Botan.Tower; 

// checks if there are any dead bullets that can be revived
// if not creates a new bullet.
// Recycling!
Botan.Tower.prototype.createBullet = function(){
    //check bullet group to see if there are any dead bullets
    
    var bullet = this.game.tower_bullet_grp.getFirstDead();
    //see if a dead bullet was found
    if(bullet){
        bullet.revive();
        bullet.x = this.x;
        bullet.y = this.y;
    }else{
        //create bullet
        bullet = this.game.add.existing(new Botan.Bullet(this.game,this.x, this.y, 'bullet_spr'));
        //add bullet to the group
        this.game.tower_bullet_grp.add(bullet);
    }
    //return bullet to be used
    return bullet;
};

