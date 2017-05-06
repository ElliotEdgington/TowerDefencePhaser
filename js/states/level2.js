//  Game handles the actual game, this will display the level to the player and handle game logic.
// specific game logic per object should be kept within the objects prototype.

//yet to be decided whether to make seperate states per level or load this state with a bunch of parameters.
var Botan = Botan || {};


Botan.Level2 = function(){};


Botan.Level2.prototype = {
    
    
    //save this for later to take parameters
    init: function(){},
    
    //Loads any last bits and bobs, save for later
    preload: function(){
        console.log("Started Level2 state");
    },
        
    
    //Uses all the game assets and prefabs to create the game.
    create: function(){
        
        
        // -- Maybe abrstact this into different js file --
        // Load in tiled level from JSON file
        
        // Size of json file
        this.game.world.setBounds(0, 0, 1920, 1920);
        
        this.map = this.game.add.tilemap('level2_tmap');
        this.map.addTilesetImage('Tileset', 'level_tset');
        
        this.layer = this.map.createLayer('Ground');
        this.layer.resizeWorld();
    
        // Nodes will be stored in array
        this.nodes = [];
        this.nodes_layer = this.map.createLayer('Direction');
        this.nodes_layer.visible = false;

        //getting nodes from layer in JSON file
        this.node_num = 0;
        var num_of_nodes = 10;
        while(this.node_num <= num_of_nodes){
            this.node_num++;
            this.map.forEach(function(tile){
                if(tile.index == this.node_num){
                    this.nodes.push(new Botan.Waypoint(this, (tile.x * this.map.tileWidth) + this.map.tileWidth/2, 
                                                       (tile.y * this.map.tileHeight) + this.map.tileHeight/2));
                }
            }, this, 0, 0, this.map.width, this.map.height, this.nodes_layer);
        }
        
        
        // create groups 
        // groups are stored in the game object so all objects
        // can use them
        this.tower_bullet_grp = this.game.add.group(); 
        this.enemy_grp = this.game.add.group();
        
        // create objects
        this.player_obj = this.game.add.existing(new Botan.Player(this));
        
        //player placement
        this.player_obj.x = 1920;
        this.player_obj.y = 200;
        
        //test tower placement
        this.testTower2 = this.game.add.existing(new Botan.CandyCornTower(this));
        this.testTower2.x = 2180;
        this.testTower2.y = 100;
        
        this.testTower3 = this.game.add.existing(new Botan.GumDropTower(this));
        this.testTower3.x = 1980;
        this.testTower3.y = 100;
        
        this.testTower4 = this.game.add.existing(new Botan.PoloTower(this));
        this.testTower4.x = 1780;
        this.testTower4.y = 100;
                
        
        this.enemy_grp.add(this.game.add.existing(new Botan.GhostEnemy(this, 2180, 300)));
        this.enemy_grp.add(this.game.add.existing(new Botan.SkullEnemy(this, 2380, 300)));
        
        
        
        //Start game timer
        this.game_timer = 0;
        Botan.game.time.events.loop(10, function(){
            this.game_timer++;
        }, this);
    }
};





//PAUSE button in progress

//this.pauseButton = this.game.add.
//this.pauseButton.inputEnabled = true;
//this.pauseButton.fixedToCamera = true;
//this.pauseButton.events.onInputUp.add(function() {
  //  this.game.paused = true;
    //this.pauseButton = 'play_button';
//}, this);
//this.game.input.onDown.add(function() {
  //  if(this.game.paused) this.game.paused = false;
    //this.pauseButton = 'pause_button';
//}, this);