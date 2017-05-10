/*
 * An invisible sprite object that are used for waypoints
 * that enemy NPC follow.
 */
var Botan = Botan || {};

Botan.Waypoint = function(game, x, y){
    Phaser.Sprite.call(this, Botan.game, x, y);
    this.game = game;
    // Enabling systems
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
};

Botan.Waypoint.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Waypoint.prototype.constructor = Botan.Waypoint;

