
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
        
        
        this.game.add.sprite((GAMEWIDTH/2 - 128 * 2), GAMEHEIGHT/2, 'load_spr');
        // title assets
        this.load.image('title','../../assets/menu_assets/title_spr.png');
        this.load.image('temp_ghost', '../../assets/menu_assets/temp_ghost.png');
        this.load.image('button', '../../assets/menu_assets/levelselect_btn.png');
        this.load.image('menu_bg', '../../assets/menu_assets/titlescreen_background.png')
        
        
        
        this.game.add.sprite((GAMEWIDTH/2 - 128 * 1), GAMEHEIGHT/2, 'load_spr');
        // Player
        this.load.spritesheet('player_spr', '../../assets/sprite_sheets/player_spritesheet.png', 128, 128, 16);
        
        
        // Enemies
        this.load.spritesheet('ghost_spr','../../assets/sprite_sheets/ghost_spritesheet.png', 128, 128, 16);
        this.load.spritesheet('skull_spr','../../assets/sprite_sheets/skull_spritesheet.png', 128, 128, 13);
        

        // Towers
        this.load.image('basic_tower_spr','../../assets/towers/basic_tower_img.png');
        this.load.spritesheet('candycorn_tower_spr','../../assets/towers/candycorn_tower.png', 128, 128, 8);
        this.load.spritesheet('polo_tower_spr','../../assets/towers/polo_tower.png', 128, 128, 7);
        this.load.spritesheet('gumdrop_tower_spr','../../assets/towers/gumdrop_tower.png', 128, 128, 7);
        
        this.load.image('base_spr', '../../assets/towers/gingerbread_house_base.png');

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
        
        this.game.add.sprite((GAMEWIDTH/2 + 128 * 2), GAMEHEIGHT/2, 'load_spr');        
        // Load Level Tilesets
        this.load.image('level_tset', '../../assets/level_files/tilesetnew1.png');
        
        // Load JSON Level Files
        this.load.tilemap('level1_tmap', '../../assets/level_files/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level2_tmap', '../../assets/level_files/level2.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level3_tmap', '../../assets/level_files/level3.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        this.game.add.sprite((GAMEWIDTH/2 + 128 * 2), GAMEHEIGHT/2, 'load_spr');        
        // GUI Buttons
        this.load.image('mute_button', '../../assets/mute_button.png');
        this.load.image('muteon_button', '../../assets/muteon_button.png');
        this.load.image('pause_button', '../../assets/pause_button.png');
        this.load.image('play_button', '../../assets/play_button.png');
        //Game GUI Buttons
        //this.load.image('play_button', '../../assets/buttons/candycorn_button.png');
        //this.load.image('play_button', '../../assets/buttons/gumdrop_button.png');
        //this.load.image('play_button', '../../assets/buttons/polo_button.png');
        //this.load.image('play_button', '../../assets/buttons/shop_button.png');
        
        this.load.image('cancel_button', '../../assets/buttons/cancel_button.png');
        this.load.image('buy_button', '../../assets/buttons/buy_button.png');
        this.load.image('plus_button', '../../assets/buttons/plus_button.png');
        this.load.image('gold_spr', '../../assets/coin.png');
        
        // Selection marker
        this.load.image('selection_spr', '../../assets/Towers/selection_marker.png');
        this.load.image('tower_range_spr', '../../assets/Towers/tower_range.png');
        this.load.image('tower_place_spr', '../../assets/Towers/place_tower.png');


        //audio
        //this.load.audio('bg_music', '../../assets/bg_music.mp3');
        // audio
        this.load.audio('hit_aud', '../../assets/sound_effects/pumpkin_break_01.ogg');
        
        // temp assets
        this.load.image('temp_title','../../assets/menu_assets/titlescreen.png');
        this.load.image('temp_ghost', '../../assets/menu_assets/temp_ghost.png');
        this.load.image('temp_button', '../../assets/menu_assets/levelselect.png');
        this.load.image('play_button', '../../assets/coin.png');
        
        //buttons
        
        
    },
    
    
    create: function () {
        //starts the main menu state after all assets are loaded
        this.game.state.start('MainMenu');
    }


};