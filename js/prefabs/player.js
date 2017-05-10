/*
 * Player is the object that the user interacts with,
 * it can be moved in eight directions and contains
 * most of the input checks for the game.
 */
var Botan = Botan || {};

//vars for input keys
var wKey, sKey, aKey, dKey, testKey;
var cursorKeys;

Botan.Player = function (game) {
    //arbritary placement
    var x = 500, y = 800;
    Phaser.Sprite.call(this, Botan.game, x, y, 'player_spr');
    this.game = game;
    
    //player animations
    this.animations.add('down', [ 0, 1, 2, 3], 7, true);
    this.animations.add('up', [ 4, 5, 6, 7], 7, true);
    this.animations.add('right', [ 8, 9, 10, 11], 7, true);
    this.animations.add('left', [ 12, 13, 14, 15], 7, true);
    
    //activate systems and edit sprite info.
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    
    this.game.camera.follow(this);
    
    this.enableBody = true;
    this.body.collideWorldBounds=true;
    

    wKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.W);
    aKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.A);
    sKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.S);
    dKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.D);
    
    //UP DOWN LEFT RIGHT Keys in an object
    cursorKeys = Botan.game.input.keyboard.createCursorKeys();
    

    //set variables for player
    this.speed = 400;
};

Botan.Player.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Player.prototype.constructor = Botan.Player;


/*
* More behaviours were planned for the player which is why
* the input is abstracted into another function
*/

Botan.Player.prototype.update = function (){
    this.input();
};

/*
 * This handles all the user input and moves the
 * player according to what the user presses.
 * The WASD keys and the arrow keys are supported.
 */

Botan.Player.prototype.input = function  (){ 
    
    //keyboard movement
    // up down
    if(wKey.isDown || cursorKeys.up.isDown){
        this.body.velocity.y = -this.speed;
        this.animations.play('up');
    }
    if(sKey.isDown || cursorKeys.down.isDown){
        this.body.velocity.y = this.speed;
        this.animations.play('down');
    }
    if((!sKey.isDown && !cursorKeys.down.isDown) && (!wKey.isDown && !cursorKeys.up.isDown)){
        this.body.velocity.y = 0;
        
    }
    
    
    //left right
    if(aKey.isDown || cursorKeys.left.isDown){   
        this.body.velocity.x = -this.speed;
        this.animations.play('left');
    } 
    if(dKey.isDown || cursorKeys.right.isDown){   
        this.body.velocity.x = this.speed;
        this.animations.play('right');
    }
    
    if((!dKey.isDown && !cursorKeys.right.isDown) && (!aKey.isDown && !cursorKeys.left.isDown)){
        this.body.velocity.x = 0;
        
    }
};
