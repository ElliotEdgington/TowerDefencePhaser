// Player holds the necessary information to create the player object.
// It handles all the keyboard events for the player in the update fucntion.
var Botan = Botan || {};

//vars for input keys
var wKey, sKey, aKey, dKey;
var cursorKeys;

Botan.Player = function(game){
    //arbritary placement
    var x = GAMEWIDTH/2;
    var y = GAMEHEIGHT/2
    Phaser.Sprite.call(this, game, x, y, 'player_spr');
    
    //activate systems and edit sprite info.
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    //input keys
    wKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.W);
    aKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.A);
    sKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.S);
    dKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.D);
    
    //UP DOWN LEFT RIGHT Keys in an object
    cursorKeys = Botan.game.input.keyboard.createCursorKeys()
    
    //set variables for player
    this.speed = 100;
};

Botan.Player.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Player.prototype.constructor = Botan.Player;

Botan.Player.prototype.update = function(){
    this.input();
};

Botan.Player.prototype.input = function(){    
    //keyboard movement
    // up down
    if(wKey.isDown || cursorKeys.up.isDown){
        this.body.velocity.y = -this.speed;
    }
    if(sKey.isDown || cursorKeys.down.isDown){
        this.body.velocity.y = this.speed;
    }
    if((!sKey.isDown && !cursorKeys.down.isDown) && (!wKey.isDown && !cursorKeys.up.isDown)){
        this.body.velocity.y = 0;
    }
    
    
    //left right
    if(aKey.isDown || cursorKeys.left.isDown){   
        this.body.velocity.x = -this.speed;
    }
    if(dKey.isDown || cursorKeys.right.isDown){   
        this.body.velocity.x = this.speed;
    }
    
    if((!dKey.isDown && !cursorKeys.right.isDown) && (!aKey.isDown && !cursorKeys.left.isDown)){
        this.body.velocity.x = 0;
    }
};