/*
 * All towers inherit behaviours off this class. It contains deefault stats
 * and non unique traits for each tower.
 */

// -- DO NOT COPY PASTA INHERIT FROM THIS PLEASE --

var Botan = Botan || {};

Botan.Tower = function(game, x, y, spr_name){
    Phaser.Sprite.call(this, Botan.game, x, y, spr_name);
    this.game = game;
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    //for onclick
    this.inputEnabled = true;
    this.events.onInputDown.add(this.clickListener, this);
    //stores enemies in range of fire
    this.in_range = [];
    this.AI = 0;
    
    // default properties -- All these properties can be changed per tower basis 
    // in the other tower files.
    this.target = null;
    this.range = 400;
    this.fire_rate = 100;
    this.price = 10;
    this.tower_damage = 1;
    this.level = 1;
};

Botan.Tower.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Tower.prototype.constructor = Botan.Tower; 


/*
 * Checks for dead bullets in the bullet group and then
 * revives them if so. If there are no dead bullets left
 * this function will create one.
 */
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
        bullet.slow = false;
        //return bullet to be used
        return bullet;
    }
};



/*
 * Makes a list of all the enemies in range of the tower
 * then performs a small algorithm to determine what 
 * one to target based on what the player has selected the
 * tower to do.
 */
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
            case 0:
                this.target = this.in_range[0];
                break;
            // find enemy in range with highest health
            case 1:
                this.target = this.in_range[0];
                this.in_range.forEach(function(e){
                    if(this.target.health < e.health)
                        this.target = e;
                },this);
                break;
            case 2:
                this.target = this.in_range[0];
                this.in_range.forEach(function(e){
                    if(this.target.speed < e.speed)
                        this.target = e;
                },this);
                break;
        }
};

/*
 * Onclick listener for selection
 */

Botan.Tower.prototype.clickListener = function(){
    this.game.GUI_obj.setSelection(this);
    //bring up info about tower on GUI
};

/*
 * Basic upgrade multiplications
 */
Botan.Tower.prototype.upgrade = function(){
    this.range *= 1.5;
    this.tower_damage *= 1.2;
    this.fire_rate *= 0.8;
    this.price *=2;
};

/*
 * Tower is sold for half the price the player has spent on it.
 */

Botan.Tower.prototype.sell = function(){
    this.game.GUI_obj.addGold(Math.round(this.price/2));
    this.destroy();
};

