// Player holds the necessary information to create the player object.
// It handles all the keyboard events for the player in the update fucntion.
var Botan = Botan || {};

//vars for input keys
var wKey, sKey, aKey, dKey;
var cursorKeys;

Botan.Player = function (game) {
    //arbritary placement
    var x = 500;
    var y = 800
    Phaser.Sprite.call(this, Botan.game, x, y, 'player_spr');
    this.game = game;
    
    //player animations
    this.animations.add('down', [ 0, 1, 2, 3],7,true);
    this.animations.add('up', [ 4, 5, 6, 7],7,true);
    this.animations.add('right', [ 8, 9, 10 ,11],7,true);
    this.animations.add('left', [ 12, 13, 14, 15],7,true);
    
    //activate systems and edit sprite info.
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    
    this.game.camera.follow(this);
    //input keys
    wKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.W);
    aKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.A);
    sKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.S);
    dKey = Botan.game.input.keyboard.addKey(Phaser.Keyboard.D);
    
    //UP DOWN LEFT RIGHT Keys in an object
    cursorKeys = Botan.game.input.keyboard.createCursorKeys();
    
    //set variables for player
    this.speed = 200;
};

Botan.Player.prototype = Object.create(Phaser.Sprite.prototype);
Botan.Player.prototype.constructor = Botan.Player;

Botan.Player.prototype.update = function(){
    this.input();
};

Botan.Player.prototype.input = function (){ 
    //mouse click fire
    
    
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

Botan.Player.prototype.fire = function(){
  // use arcade physcis to shoot bullet toward cursor.  
};