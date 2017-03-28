// MainMenu displays the main menu to the screen.
// Handles interactive buttons, changes state relative to button pressed.

var Botan = Botan || {};


Botan.MainMenu = function(){};

Botan.MainMenu.prototype = {
    
    
    //We shouldn't need this but just incase.
    preload: function(){
        console.log("Started MainMenu state");
        
    },
    
    create: function(){
        
        //this.game.add.button(x, y, image_key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
        // x = x pos, y = y pos, image_key = the name you gave the sprite in preload, callback = function called on click
        //callbackContext = leave as is ('this'), all other parameters are optional for rollover, just use id of spritesheet.
        //temp play button for testing
        this.playButton = this.game.add.button(200, 200, 'playButton_spr', this.onClickPlayButton, this);
        
    },
    
    onClickPlayButton: function(){
        //switch states to game state + other options
        console.log("clicked");
        this.game.state.start('Game');
    },
    
    //For debug
    render: function(){}

}
