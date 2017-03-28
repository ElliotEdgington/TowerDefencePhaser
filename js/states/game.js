//  Game handles the actual game, this will display the level to the player and handle game logic.
// specific game logic per object should be kept within the objects prototype.

//yet to be decided whether to make seperate states per level or load this state with a bunch of parameters.
var Botan = Botan || {};


Botan.Game = function(){};


Botan.Game.prototype = {
    
    
    //save this for later to take parameters
    init: function(){},
    
    //Loads any last bits and bobs, save for later
    preload: function(){
        console.log("Started Game state");
    },
        
    
    //Uses all the game assets and prefabs to create the game.
    create: function(){
        // create groups 
        // groups are stored in the game object so all objects
        // can use them
        Botan.tower_bullet_grp = this.game.add.group(); 
        
        // create objects
        this.player_obj = this.game.add.existing(new Botan.Player());
        this.testTower = this.game.add.existing(new Botan.BasicTower());
        
    }
};