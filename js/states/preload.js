// Preload loads all assets to use during the game,
// Also displays loading screen using assets loaded from boot.js

var Botan = Botan || {}

Botan.Preload = function(){};

Botan.Preload.prototype = {
    
    
    //load all the assets for the game
    preload: function(){
        console.log("Started Preload state");
        //example load image
        //this.load.image('name_spr', 'spr_directory');
        //this.load.spritesheet, this.load.audio. this.load.tilemap
        
        //use prefixes for names
        // image       -- _spr
        // audio       -- _aud
        // spritesheet -- _sheet
        // tilemap     -- _tmap
        
        this.load.image('basic_tower_spr','../../assets/towers/basic_tower_img.png');       this.load.image('bullet_spr','../../assets/towers/bullet_img.png');

        
        
    },
    
    
    create: function(){
        //starts the main menu state after all assets are loaded
        this.game.state.start('MainMenu');
    }

}