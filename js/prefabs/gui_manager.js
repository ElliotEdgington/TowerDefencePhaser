// handles all the GUI calls for the game


var Botan = Botan || {};

Botan.GUIManager = function(game){
    this.game = game;
    
    //text
    this.gold_style = { font: "40px Arial", fill: "#FFFFFF" };
    this.price_style = { font: "32px Arial", fill: "#FFFFFF" };

    
    //shows gold
    this.gold_obj = this.game.add.sprite(GAMEWIDTH - 200, 10, 'gold_spr');
    this.gold_obj.scale.setTo(0.4, 0.4);
    this.gold_obj.fixedToCamera = true;
    
    this.gold_text = this.game.add.text(GAMEWIDTH - 120, 15, '000', this.gold_style);
    this.gold_text.fixedToCamera = true;
    
    // shop buttons
    var button_height = GAMEHEIGHT - 130;
    var button_width  = 140;
    this.shop_grp = this.game.add.group();
    this.shop_grp.fixedToCamera = true;
    
    this.addTowerButton( 40 + button_width * 0, button_height, 'candycorn_tower_spr', 'candycorn', 100);
    this.addTowerButton( 40 + button_width * 1, button_height, 'gumdrop_tower_spr', 'gumdrop', 300);
    this.addTowerButton( 40 + button_width * 2, button_height, 'polo_tower_spr', 'polo', 300);

    
    //-- GUI for tower selection -- eh can't be bothered to make a seperate object for this
    //for selection of towers starts offscreen
    this.selection_obj = this.game.add.sprite(-500, -500, 'selection_spr');
    this.selection_obj.anchor.setTo(0.5, 0.5);
    this.selection = null;
    //range for towers starts offscreen
    this.range_obj = this.game.add.sprite( -500, -500, 'tower_range_spr');
    this.range_obj.anchor.setTo( 0.5, 0.5);
    //price of tower
    this.tower_upgrade_price = this.game.add.text(-500, -500, '000', this.price_style);
    //gold icon for tower
    this.tower_gold_icon = this.game.add.sprite(-500, -500, 'gold_spr');
    this.tower_gold_icon.scale.setTo(0.3, 0.3);
    //plus button to upgrade
    this.tower_upgrade_button = this.game.add.button(-500, -500, 'plus_button', this.upgradeTower, this);
    this.tower_upgrade_button.scale.setTo( 0.4, 0.4);
};

Botan.GUIManager.prototype = Object.create(Botan.Tower.prototype);
Botan.GUIManager.prototype.constructor = Botan.GUIManager;


//adds a tower button
Botan.GUIManager.prototype.addTowerButton = function(x, y, sprite, name, price){
    
    var tower = this.game.add.button(x, y, sprite, function(){ this.placeTower(name, price); }, this);
    
    tower.price = price;
    // display tower
    this.shop_grp.add(tower);
    // display buy button of button
    this.shop_grp.add(this.game.add.sprite(x, y, 'buy_button'));
    
    //gold icon
    var gold_price = this.game.add.sprite(x + 10, y + 5, 'gold_spr');
    gold_price.scale.setTo( 0.3, 0.3);
    this.shop_grp.add(gold_price);
    //price as text
    this.shop_grp.add(this.game.add.text(x + 50, y + 5, tower.price, this.price_style));
};


// adds tower placement area
Botan.GUIManager.prototype.placeTower = function(name, price){
    if(this.game.gold >= price){
        this.addGold(-price);
        this.place = this.game.add.existing(new Botan.TowerPlace(this.game, name));
    }
};


//Adds the value to gold and updates score text
Botan.GUIManager.prototype.addGold = function(value){
    this.game.gold += value;
    this.gold_text.setText(this.game.gold);
};

//places marker around selected target
Botan.GUIManager.prototype.setSelection = function(target){
    //put selection target on tower
    this.selection = target;
    this.selection_obj.x = target.x;
    this.selection_obj.y = target.y;
    //show range of tower
    this.range_obj.x = target.x;
    this.range_obj.y = target.y;
    this.range_obj.scale.setTo(target.range/50, target.range/50);
    //show upgrade button and price
    this.tower_upgrade_price.x = this.selection.x + 110;
    this.tower_upgrade_price.y = this.selection.y;
    this.tower_upgrade_price.setText(target.price);
    //gold icon
    this.tower_gold_icon.x = this.selection.x + 70;
    this.tower_gold_icon.y = this.selection.y;
    //upgrade button
    this.tower_upgrade_button.x = this.selection.x + 100;
    this.tower_upgrade_button.y = this.selection.y - 50;
};


//sends upgrade message to tower if the player has enough money
Botan.GUIManager.prototype.upgradeTower = function(){
    if(this.game.gold >= this.selection.price){
        this.addGold(-this.selection.price);
        this.selection.upgrade();
        this.setSelection(this.selection);
    }
};

