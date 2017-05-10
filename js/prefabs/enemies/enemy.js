// An object for every enemy npc to inherit of off. 

// -- DO NOT COPY PASTA INHERIT FROM THIS PLEASE --

var Botan = Botan || {};

Botan.Enemy = function(game, spr_name){
    var x = game.nodes[0].x;                                                    // Set initial placement to be
    var y = game.nodes[0].y;                                                    // where the first node is.
    Phaser.Sprite.call(this, Botan.game, x, y, spr_name);
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);

    //starting waypoint
    this.waypoint = 0;                                                          // waypoints determine what 
                                                                                // position to go to next
    //setting default stats
    this.hp = 10;
    this.speed = 1;
    this.gold_value = 100;
    
};

Botan.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Enemy.prototype.constructor = Botan.Enemy;

/*
 * Update function in enemy moves the enemy toward the next waypoint and
 * if the enemy reaches the end of the path (hits the base) remove a
 * defence point from the player.
 */

Botan.Enemy.prototype.update = function(){
    //move toward next node
    var node = this.game.nodes[this.waypoint];
    this.game.physics.arcade.moveToXY(this, node.x, node.y, this.speed);
    this.game.physics.arcade.overlap(this, node, this.nextWaypoint, null, this);
    
    // destroying the enemy
    
    //Delete enemy when it gets to the last waypoint
    if(this.waypoint == this.game.nodes.length){
        this.game.base_obj.removeDefence();
        this.destroy();
    }
};

/*
 * removes damage amount of health from the enemy object
 * if health reaches 0 the player is given gold and the
 * wave gets checked to see if all enemies are dead.
 */

Botan.Enemy.prototype.removeHealth = function(damage){
    this.hp -= damage;
    if(this.hp <= 0){
        // add money gold here
        this.game.GUI_obj.addGold(this.gold_value);
        // play animation or something?
        this.exists = false;
        this.game.enemy_grp.remove(this);
        
        this.game.WaveManager_obj.checkWave();
        this.destroy();
    }
};

/*
 * Adds to the waypoint variable
 */

Botan.Enemy.prototype.nextWaypoint = function(){
    this.waypoint += 1;
};

/*
 * Slow status effect for the enemy when hit by a polo bullet.
 * sets variables to make the enemy appear slow and tinted blue
 * then creates a timer, after the timer is up the enemy will
 * revert to their previous state.
 */

Botan.Enemy.prototype.slow = function(length, amount){
    if(!this.slowed && this.game != null){
        this.slowed = true;
        this.speed *= 1/amount;
        var tint = this.tint
        this.tint = 0x99ddff;
        this.game.time.events.add(Phaser.Timer.SECOND * length, function(){
                                    this.speed *= amount;
                                    this.tint = tint;
                                    this.slowed = false;
                                  }, this);
    }
};


