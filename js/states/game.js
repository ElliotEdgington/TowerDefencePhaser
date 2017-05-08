//  Game handles the actual game, this will display the level to the player and handle game logic.
// specific game logic per object should be kept within the objects prototype.

var Botan = Botan || {};


Botan.Game = function(){};


Botan.Game.prototype = {
    
    
    //When changing states, this takes in the map name to load the tilemap
    init: function(map_name){
        this.tilemap_name = map_name;
    },
    
    //Loads any last bits and bobs, save for later
    preload: function(){
        console.log("Started Game state");
    },
        
    
    //Uses all the game assets and prefabs to create the game.
    create: function(){
        
        // Size of json file
        this.map = this.game.add.tilemap(this.tilemap_name);
        this.map.addTilesetImage('Tileset', 'level_tset');
       
        
        this.layer = this.map.createLayer('Ground');
        this.layer.resizeWorld();
    
        // Nodes will be stored in array
        this.nodes = [];
        this.nodes_layer = this.map.createLayer('Direction');
        this.nodes_layer.visible = false;

        //getting nodes from layer in JSON file
        this.node_num = 0;
        var num_of_nodes = 9;
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
        this.tower_grp = this.game.add.group();
        this.tower_bullet_grp = this.game.add.group(); 
        this.enemy_grp = this.game.add.group();
        
        
        //create GUI
        this.GUI_obj = new Botan.GUIManager(this);
        
        // create objects
        this.player_obj = this.game.add.existing(new Botan.Player(this));

        //this.tower_grp.add(this.game.add.existing(new Botan.CandyCornTower(this, 200, 200)));
        //this.tower_grp.add(this.game.add.existing(new Botan.GumDropTower(this, 100, 100)));
        //this.tower_grp.add(this.game.add.existing(new Botan.PoloTower(this, 600, 600)));
                
        
        this.enemy_grp.add(this.game.add.existing(new Botan.GhostEnemy(this, 400, 0)));
        this.enemy_grp.add(this.game.add.existing(new Botan.SkullEnemy(this, 400, -100)));
//        this.enemy_grp.add(this.game.add.existing(new Botan.SkullEnemy2(this, 400, -300)));
//        this.enemy_grp.add(this.game.add.existing(new Botan.SkullEnemy3(this, 400, -500)));
        
        //Game variables -----
        this.gold = 0;
        this.GUI_obj.addGold(700);
        
        //Start game timer
        this.game_timer = 0;
        Botan.game.time.events.loop(10, function(){
            this.game_timer++;
        }, this);
    }
};





//PAUSE button in progress

//this.pauseButton = this.game.add.button(740, 10, 'pause_button', this.onClickPause, this);
//this.pauseButton.fixedToCamera = true;
//this.pauseButton.inputEnabled = true;
//this.pauseButton.events.onInputUp.add(function() {
  //  this.game.paused = true;
//    this.pauseButton = 'play_button';
//}, this);
//this.game.input.onDown.add(function() {
  //  if(this.game.paused) this.game.paused = false;
    //this.pauseButton = 'pause_button';
//}, this);



//Pause 2.0 try using this code instead ? https://phaser.io/examples/v2/misc/pause-menu look at dis.


//this.pauseButton= this.add.button (700,10, 'pause_button', onClickPause, this, 0, 0, 0);

//onClickPause function:{
    
//  game.paused = true;
//}

//this.input.onDown.add(unpause, self);

//if (game.paused){
 //   if ()
//}






















