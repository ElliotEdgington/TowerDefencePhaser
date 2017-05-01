// an invisible sprite that uses collision detection to act as a waypoint

var Botan = Botan || {};

Botan.Waypoint = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y);
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
};

Botan.Waypoint.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Waypoint.prototype.constructor = Botan.Waypoint;

