// Game handles the actual game, this will display the level to the player and handle game logic.
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
        var num_of_nodes = 20;
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
        this.enemy_reference_grp = this.game.add.group();
        
        
        // create objects
        this.player_obj = this.game.add.existing(new Botan.Player(this));
        this.base_obj = this.game.add.existing(new Botan.HomeBase(this, this.nodes[this.nodes.length-1].x,
                                                                  this.nodes[this.nodes.length-1].y));
        
        //add references and kill them.
        this.ghost_enemy_ref = this.game.add.existing(new Botan.GhostEnemy(this));
        this.skull_enemy_ref = this.game.add.existing(new Botan.SkullEnemy(this));
        this.skull_fast_enemy_ref = this.game.add.existing(new Botan.SkullEnemy_Fast(this));
        this.skull_big_enemy_ref = this.game.add.existing(new Botan.SkullEnemy_Big(this));
        this.skull_boss_enemy_ref = this.game.add.existing(new Botan.SkullEnemy_Boss(this));
        this.enemy_reference_grp.addMultiple([this.ghost_enemy_ref,this.skull_big_enemy_ref,
                                             this.skull_enemy_ref,this.skull_fast_enemy_ref,
                                             this.skull_boss_enemy_ref]);
        this.enemy_reference_grp.forEach(function(e){ e.kill(); }, this);
        
        //create Managers
        this.GUI_obj = new Botan.GUIManager(this);
        this.WaveManager_obj = new Botan.WaveManager(this);
        
        //Game variables -----
        this.gold = 0;
        this.GUI_obj.addGold(300);
        
        this.wave = 0;
        
        //Start game timer
        this.game_timer = 0;
        Botan.game.time.events.loop(10, function(){
            this.game_timer++;
        }, this);
        
        
        //start game
        this.WaveManager_obj.nextWave();
    }
};





















