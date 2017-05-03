// An object for every enemy npc to inherit of off. 

var Botan = Botan || {};

Botan.SkullEnemy = function(game, x, y, skull_spr){
    Phaser.Sprite.call(this, Botan.game, x, y, 'skull_spr');
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    //enemy animations
    this.animations.add('move', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],7,true);
    
    
    //setting default stats
    this.health = 15;
    this.speed = 1;
    
    //starting waypoint
    this.waypoint = 1;
    this.scale.setTo(0.8);
};

Botan.SkullEnemy.prototype = Object.create(Phaser.Sprite.prototype);
Botan.SkullEnemy.prototype.constructor = Botan.SkullEnemy;

Botan.SkullEnemy.prototype.update = function(){
    var node = this.game.nodes[this.waypoint];
    this.game.physics.arcade.moveToXY(this, node.x, node.y, 60);
    this.game.physics.arcade.overlap(this, node, this.nextWaypoint, null, this);

};


Botan.SkullEnemy.prototype.nextWaypoint = function(){
    this.waypoint += 1;
}