// MainMenu displays the main menu to the screen.
// Handles interactive buttons, changes state relative to button pressed.

var Botan = Botan || {};


Botan.LevelSelect = function(){};

Botan.LevelSelect.prototype = {
    
    
    //We shouldn't need this but just incase.
    preload: function(){
        console.log("Opened Level Select");
        
    },
    
    create: function(){
        
        //this.game.add.button(x, y, image_key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
        // x = x pos, y = y pos, image_key = the name you gave the sprite in preload, callback = function called on click
        //callbackContext = leave as is ('this'), all other parameters are optional for rollover, just use id of spritesheet.
        //temp play button for testing
        this.playLevel1Button = this.game.add.button(190, 150, 'level_1', this.onClickLevel1, this);
        this.playLevel2Button = this.game.add.button(390, 150, 'level_2', this.onClickLevel2, this);
        this.playLevel3Button = this.game.add.button(190, 350, 'level_3', this.onClickLevel3, this);
        this.playLevel4Button = this.game.add.button(390, 350, 'level_4', this.onClickLevel4, this);
    },
    
    onClickLevel1: function(){
        //switch states to game state + other options
        console.log("clicked");
        this.game.state.start('Game', true, false, 'level1_tmap');
    },
        
    onClickLevel2: function(){
        //switch states to game state + other options
        console.log("clicked");
<<<<<<< HEAD
        this.game.state.start('Game', true, false, 'level2_tmap');
=======
        this.game.state.start('Level2');
>>>>>>> bb98ad117f336c2a753be957bf93a998fb83594a
    },
    onClickLevel3: function(){
        //switch states to game state + other options
        console.log("clicked");
<<<<<<< HEAD
        this.game.state.start('Game', true, false, 'level3_tmap');
=======
        this.game.state.start('Level3');
>>>>>>> bb98ad117f336c2a753be957bf93a998fb83594a
    },
    onClickLevel4: function(){
        //switch states to game state + other options
        console.log("clicked");
        this.game.state.start('Game', true, false, 'level4_tmap');
    },
    
    //For debug
    render: function(){}

};
