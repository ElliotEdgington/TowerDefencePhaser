// An object for every enemy npc to inherit of off. 

// -- DO NOT COPY PASTA INHERIT FROM THIS PLEASE --

var Botan = Botan || {};

Botan.Enemy = function(game, spr_name){
    var x = game.nodes[0].x;
    var y = game.nodes[0].y;
    Phaser.Sprite.call(this, Botan.game, x, y, spr_name);
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);

    //starting waypoint
    this.waypoint = 0;
    
    
    //setting default stats
    this.hp = 10;
    this.speed = 1;
    this.gold_value = 100;
    
};

Botan.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Enemy.prototype.constructor = Botan.Enemy;

Botan.Enemy.prototype.update = function(){
    

    
    //move toward next node
    var node = this.game.nodes[this.waypoint];
    this.game.physics.arcade.moveToXY(this, node.x, node.y, this.speed);
    this.game.physics.arcade.overlap(this, node, this.nextWaypoint, null, this);
    
    // destroying the enemy
    
    //Delete enemy when it gets to the last waypoint
    if(this.waypoint == this.game.nodes.length){
        this.destroy();
        // remove health 
        this.game.base_obj.removeDefence();
    }
    


};

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


Botan.Enemy.prototype.nextWaypoint = function(){
    this.waypoint += 1;
};

//some status effects

Botan.Enemy.prototype.slow = function(length, amount){
    if(!this.slowed){
        this.slowed = true;
        this.speed *= 1/amount;
        this.tint = 0x99ddff;
        this.game.time.events.add(Phaser.Timer.SECOND * length, function(){
                                    this.speed *= amount;
                                    this.tint = 0xFFFFFF;
                                    this.slowed = false;
                                  }, this);
    }
};


