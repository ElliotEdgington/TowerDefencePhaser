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
        this.background = this.game.add.tileSprite(0, 0, 800, 600, 'menu_bg');
        this.playButton = this.game.add.button(160, 500, 'button', this.onClickPlayButton, this);
        this.game.add.sprite(70, 295, 'title');
        this.game.add.sprite(610, 220, 'temp_ghost');
        this.game.add.audio('bg_temp');
        

        //Audio
        this.music = this.game.add.audio('bg_music');
        this.music.play();
        this.music.loop = true;
        
        
        //mute button
        this.muteButton = this.game.add.button(740, 10, 'mute_button', this.onClickMute, this);
        this.muteButton.inputEnabled = true;
        this.muteButton.fixedToCamera = true;

        if(!this.game.sound.mute){
           this.muteButton = 'muteon_button';
        } else {
         this.muteButton = 'mute_button';
          }
    },
    
    onClickPlayButton: function(){
        //switch states to game state + other options
        console.log("clicked");
        this.game.state.start('LevelSelect');
    },
    
    onClickMute: function() {
        if(!this.game.sound.mute){
        this.game.sound.mute = true;
        this.muteButton = 'muteon_button';
        }else{
        this.game.sound.mute = false;
        this.muteButton = 'mute_button';
       }
    },
    
    //For debug
    render: function(){}

}
