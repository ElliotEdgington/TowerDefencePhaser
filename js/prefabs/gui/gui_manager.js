/*
 * Handles all the GUI for the game, this includes:
 * placement of towers, health of base, selection and
 * changing settings of the towers
 */

var Botan = Botan || {};

Botan.GUIManager = function(game){
    this.game = game;
    
    //text
    this.gold_style = { font: "40px Arial", fill: "#FFFFFF" };
    this.price_style = { font: "32px Arial", fill: "#FFFFFF" };

    // -- Top GUI --
    
    //shows gold
    this.gold_obj = this.game.add.sprite(GAMEWIDTH - 200, 10, 'gold_spr');
    this.gold_obj.scale.setTo(0.4, 0.4);
    this.gold_obj.fixedToCamera = true;
    
    this.gold_text = this.game.add.text(GAMEWIDTH - 120, 15, '000', this.gold_style);
    this.gold_text.fixedToCamera = true;
    
    //shows health -- needs sprite
    this.defence_text = this.game.add.text(GAMEWIDTH - 200, 60, 'Defence : 10', this.price_style);
    this.defence_text.fixedToCamera = true;
    
    //shows wave
    this.wave_text = this.game.add.text(GAMEWIDTH - 200, 100, '000', this.price_style);
    this.wave_text.fixedToCamera = true;

    
    
    // -- Bottom GUI --
    
    // shop buttons
    var button_height = GAMEHEIGHT - 130;
    var button_width  = 140;
    this.shop_grp = this.game.add.group();
    this.shop_grp.fixedToCamera = true;
    
    this.addTowerButton( 40 + button_width * 0, button_height, 'candycorn_tower_spr', 'candycorn', 100);
    this.addTowerButton( 40 + button_width * 1, button_height, 'gumdrop_tower_spr', 'gumdrop', 300);
    this.addTowerButton( 40 + button_width * 2, button_height, 'polo_tower_spr', 'polo', 300);

    
    //-- GUI for tower selection --
    //Not ideal, but gets the job done.
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
    //sell button
    this.tower_sell_button = this.game.add.button(-500, -500, 'cancel_button', function(){
                                                                                this.selection.sell();
                                                                                this.setSelection(null); }, this);
    this.tower_sell_button.scale.setTo( 0.4, 0.4);
    // AI change button
    this.change_ai_text = this.game.add.text(-500, -500, 'Target : Any', this.gold_style);
    this.change_ai_text.anchor.setTo(0.5,0.5);
    this.change_ai_text.inputEnabled = true;
    this.change_ai_text.events.onInputDown.add(this.changeTowerAI, this);
    this.change_ai_text.events.onInputOver.add(function(t){ t.fill = "#ff0044"; }, this);
    this.change_ai_text.events.onInputOut.add(function(t){ t.fill = "#FFFFFF"; }, this);

    //selection group, can move all of them together.
    this.selection_grp = this.game.add.group();
    this.selection_grp.addMultiple([this.selection_obj,this.range_obj,this.tower_upgrade_price,
                                   this.tower_gold_icon,this.tower_upgrade_button,this.tower_sell_button,
                                   this.change_ai_text]);
};

Botan.GUIManager.prototype = Object.create(Botan.Tower.prototype);
Botan.GUIManager.prototype.constructor = Botan.GUIManager;


/*
 * Adds a tower button to the shop, this helps with scalability
 * if we ever want to add more towers the player can buy
 */
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

/*
 * Creates a tower placement object, this object is self serving as 
 * all it's logic is contained within the TowerPlace file.
 */
Botan.GUIManager.prototype.placeTower = function(name, price){
    if(this.game.gold >= price){
        this.addGold(-price);
        this.place = this.game.add.existing(new Botan.TowerPlace(this.game, name));
    }
};


/*
 * Adds a value amount of gold, then updates the text to show it to 
 * the player.
 */
Botan.GUIManager.prototype.addGold = function(value){
    this.game.gold += value;
    this.gold_text.setText(this.game.gold);
};

/*
 * Places a selection marker around the clicked tower. all editable components
 * for the tower are then repositioned around ther selected tower.
 */
Botan.GUIManager.prototype.setSelection = function(target){
    this.selection = target;
    
    if(this.selection != null){
        this.selection_grp.visible = true;
        //put selection target on tower
        this.selection_obj.x = target.x;
        this.selection_obj.y = target.y;
        //show range of tower
        this.range_obj.x = target.x;
        this.range_obj.y = target.y;
        this.range_obj.scale.setTo(target.range/100, target.range/100);
        //show upgrade button and price
        this.tower_upgrade_price.x = this.selection.x + 110;
        this.tower_upgrade_price.y = this.selection.y;
        this.tower_upgrade_price.setText(target.price);
        //gold icon
        this.tower_gold_icon.x = this.selection.x + 70;
        this.tower_gold_icon.y = this.selection.y;
        //upgrade button
        this.tower_upgrade_button.x = this.selection.x + 100;
        this.tower_upgrade_button.y = this.selection.y - 60;
        //sell button
        this.tower_sell_button.x = this.selection.x + 100;
        this.tower_sell_button.y = this.selection.y + 50;
        //change ai button
        this.change_ai_text.x = this.selection.x;
        this.change_ai_text.y = this.selection.y - 110;
        this.updateAIText();
    }else{
        this.selection_grp.visible = false;
    };
};


/*
 * Changes tower AI (Maybe put this in tower prefab)
 */

Botan.GUIManager.prototype.changeTowerAI = function(){
    if(this.selection != null){
        this.selection.AI = (this.selection.AI + 1) % 3;
        this.updateAIText();
    }
};

/*
 * Updates the AI text so when the player clicks a different tower the 
 * correct AI is showing.
 */

Botan.GUIManager.prototype.updateAIText = function(){
    if(this.selection != null){
        switch(this.selection.AI){
            case 0:
                this.change_ai_text.setText("Target : Any");
                break;
            case 1:
                this.change_ai_text.setText("Target : Highest Health");
                break;
            case 2:
                this.change_ai_text.setText("Target : Fastest");
                break;
        }
    }
};

/*
 * If the player has enough money, sends a call to the tower for
 * it to be upgraded.
 */
Botan.GUIManager.prototype.upgradeTower = function(){
    if(this.game.gold >= this.selection.price){
        this.addGold(-this.selection.price);
        this.selection.upgrade();
        this.setSelection(this.selection);
    }
};

