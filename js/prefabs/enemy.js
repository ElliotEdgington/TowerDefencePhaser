// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.Enemy = function(game, x, y, spr_name){
    Phaser.Sprite.call(this, Botan.game, x, y, spr_name);
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);

    //setting default stats
    this.health = 10;
    this.speed = 1;
    
    //starting waypoint
    this.waypoint = 0;
};

Botan.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Enemy.prototype.constructor = Botan.Enemy;

Botan.Enemy.prototype.update = function(){
    var node = this.game.nodes[this.waypoint];
    this.game.physics.arcade.moveToXY(this, node.x, node.y, 60);
    this.game.physics.arcade.overlap(this, node, this.nextWaypoint, null, this);
    
    //Delete enemy when it gets to the last waypoint
    if(this.waypoint == this.game.nodes.length){
       this.destroy(); 
    }

};


Botan.Enemy.prototype.nextWaypoint = function(){
    this.waypoint += 1;
}