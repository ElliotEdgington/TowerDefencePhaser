// An object for each tower to inherit off, this will hold behaviours
// that exist bewtween all towers

var Botan = Botan || {};

Botan.Tower = function(game, x, y, spr_name){
    Phaser.Sprite.call(this, Botan.game, x, y, spr_name);
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    
    //for onclick
    this.inputEnabled = true;
    this.events.onInputDown.add(this.clickListener, this);
    //stores enemies in range of fire
    this.in_range = [];
    //default properties
    this.target = null;
    this.range = 400;
    this.AI = 1;
};

Botan.Tower.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Tower.prototype.constructor = Botan.Tower; 

// checks if there are any dead bullets that can be revived
// if not creates a new bullet.
// Recycling!
Botan.Tower.prototype.createBullet = function(){
    this.getTarget();
    if(this.target){
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

        //set non unique bullet properties
        bullet.setTarget(this.target);
        //return bullet to be used
        return bullet;
    }
};

//gets target using basic AI that player can change.
Botan.Tower.prototype.getTarget = function(){
    this.in_range = [];
    //get array of enemies in range of tower.
    this.game.enemy_grp.forEach(function(enemy){
        if(this.game.physics.arcade.distanceBetween(this, enemy) <= this.range){
            this.in_range.push(enemy);
        }
    }, this);
    
    
    if(this.in_range.length == 0)
        this.target = null;
    else
        switch(this.AI){
            // any enemy
            case 1:
                this.target = this.in_range[0];
                break;
            // find enemy in range with highest health
            case 2:
                break;
            case 3:
                break;
        }
};

Botan.Tower.prototype.clickListener = function(){
    this.game.player_obj.setSelection(this);
    //bring up info about tower on GUI
};

