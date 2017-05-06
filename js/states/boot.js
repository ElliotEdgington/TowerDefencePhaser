// Boot handles scaling and anything to do with the screen,
// Also loads assets for the Loading screen. 
// Starts any plugins i.e physics/A* etc.

var Botan = Botan || {};


Botan.Boot = function(){};


Botan.Boot.prototype = {
    
    
    //Loads all assets for loading screen / splash screen
    preload: function(){
        console.log("Started Boot state");
        
        this.load.image('load_spr', '../../assets/load_image.png');
    },
    
    
    //scale manager / alignment / systems
    create: function(){
    
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        // starts the Preload state
        this.game.state.start('Preload');
        
    }
};



