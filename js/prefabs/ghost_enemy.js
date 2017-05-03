// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.GhostEnemy = function(game, x, y, ghost_spr){
    Phaser.Sprite.call(this, Botan.game, x, y, 'ghost_spr');
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    //enemy animations
    this.animations.add('down', [ 0, 1, 2, 3],7,true);
    this.animations.add('up', [ 4, 5, 6, 7],7,true);
    this.animations.add('right', [ 8, 9, 10 ,11],7,true);
    this.animations.add('left', [ 12, 13, 14, 15],7,true);
    
    //setting default stats
    this.health = 10;
    this.speed = 1;
    
    //starting waypoint
    this.waypoint = 0;
};

Botan.GhostEnemy.prototype = Object.create(Phaser.Sprite.prototype);
Botan.GhostEnemy.prototype.constructor = Botan.GhostEnemy;

Botan.GhostEnemy.prototype.update = function(){
    var node = this.game.nodes[this.waypoint];
    this.game.physics.arcade.moveToXY(this, node.x, node.y, 60);
    this.game.physics.arcade.overlap(this, node, this.nextWaypoint, null, this);

};


Botan.GhostEnemy.prototype.nextWaypoint = function(){
    this.waypoint += 1;
}