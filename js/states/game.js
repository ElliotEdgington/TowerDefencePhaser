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
        
        
        // -- Maybe abrstact this into different js file --
        // Load in tiled level from JSON file
        
        // Size of json file
        this.game.world.setBounds(0, 0, 1920, 1920);
        
        this.map = this.game.add.tilemap('level1_tmap');
        this.map.addTilesetImage('Tileset', 'level_tset');
        
        this.layer = this.map.createLayer('Ground');
        
        // Nodes will be stored in array
        
        
        this.nodes = [this.game.add.existing(new Botan.Waypoint(this, 100, 200)),
                     this.game.add.existing(new Botan.Waypoint(this, 300,300))];
        
        // create groups 
        // groups are stored in the game object so all objects
        // can use them
        this.tower_bullet_grp = this.game.add.group(); 
        
        // create objects
        this.player_obj = this.game.add.existing(new Botan.Player(this));

        this.testTower = this.game.add.existing(new Botan.BasicTower(this));
        this.testTower2 = this.game.add.existing(new Botan.CandyCornTower(this));
        this.testTower3 = this.game.add.existing(new Botan.GumDropTower(this));
        this.testTower4 = this.game.add.existing(new Botan.PoloTower(this));
        
        
        this.enemy_obj = this.game.add.existing(new Botan.Enemy(this, 0, 0, 'spr'));
    }
};