
// Preload loads all assets to use during the game,

// Also displays loading screen using assets loaded from boot.js

var Botan = Botan || {}

Botan.Preload = function (){};

Botan.Preload.prototype = {
    
    
    //load all the assets for the game
    preload: function (){
        console.log("Started Preload state");
        //example load image
        //this.load.image('name_spr', 'spr_directory');
        //this.load.spritesheet, this.load.audio. this.load.tilemap
        
        //use prefixes for names
        // image       -- _spr
        // audio       -- _aud
        // spritesheet -- _sheet
        // tilemap     -- _tmap
        
        // Player
        this.load.spritesheet('player_spr', '../../assets/sprite_sheets/player_spritesheet.png', 128, 128, 16);
        
        
        //Enemies
        this.load.spritesheet('ghost_spr','../../assets/sprite_sheets/ghost_spritesheet.png', 128, 128, 16);
        this.load.spritesheet('skull_spr','../../assets/sprite_sheets/skull_spritesheet.png', 128, 128, 13);
        
        // Towers
        this.load.image('basic_tower_spr','../../assets/towers/basic_tower_img.png');
        this.load.spritesheet('candycorn_tower_spr','../../assets/towers/candycorn_tower.png', 128, 128, 8);
        this.load.spritesheet('polo_tower_spr','../../assets/towers/polo_tower.png', 128, 128, 7);
        this.load.spritesheet('gumdrop_tower_spr','../../assets/towers/gumdrop_tower.png', 128, 128, 7);
        
        // Bullets
        this.load.image('bullet_spr','../../assets/towers/bullet_img.png');
        this.load.image('candycorn_bullet_spr','../../assets/towers/candycorn_bullet.png');
        this.load.image('gumdrop_bullet_spr','../../assets/towers/gumdrop_bullet.png');
        this.load.image('polo_bullet_spr','../../assets/towers/polo_bullet.png');
        
        // Level Thumbnails
        this.load.image('level_1', '../../assets/menu_assets/level1.png');
        this.load.image('level_2', '../../assets/menu_assets/level2.png');
        this.load.image('level_3', '../../assets/menu_assets/level3.png');
        this.load.image('level_4', '../../assets/menu_assets/level4.png');
        
        // Load Level Tilesets
        this.load.image('level_tset', '../../assets/level_files/tilesetnew.png');
        
        // Load JSON Level Files
        this.load.tilemap('level1_tmap', '../../assets/level_files/level1.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        // GUI Buttons
        this.load.image('mute_button', '../../assets/mute_button.png');
        this.load.image('muteon_button', '../../assets/muteon_button.png');
        this.load.image('pause_button', '../../assets/pause_button.png');

        
        // temp assets
        this.load.image('temp_title','../../assets/menu_assets/titlescreen.png');
        this.load.image('temp_ghost', '../../assets/menu_assets/temp_ghost.png');
        this.load.image('temp_button', '../../assets/menu_assets/levelselect.png');
        
        
    },
    
    
    create: function () {
        //starts the main menu state after all assets are loaded
        this.game.state.start('MainMenu');
    }


};