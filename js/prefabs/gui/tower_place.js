/*
 * This class serves as a collision detection system to make sure that the 
 * player doesn't place towers ontop of the player or other towers.
 */
var Botan = Botan || {};

Botan.TowerPlace = function(game, name){
    Phaser.Sprite.call(this, Botan.game, 0, 0, 'tower_place_spr');
    this.game = game;
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);
    this.tower_name = name;
};

Botan.TowerPlace.prototype = Object.create(Phaser.Sprite.prototype);
Botan.TowerPlace.prototype.constructor = Botan.TowerPlace; 


/*
 * The update method in this class moves the sprite along with the mouse pointer
 * then checks for collision with the player or other towers.
 * if the placement marker is colliding it will tint red, otherwise it will
 * tint green.
 * the player left clicking will place a tower in the selected position, or 
 * right clicking will cancel it.
 */

Botan.TowerPlace.prototype.update = function(){
    // have the placement follow the mouse around
    this.x = this.game.input.mousePointer.worldX;
    this.y = this.game.input.mousePointer.worldY;
    
    // Check for collisions with other towers and road and player.(needs road collisions)
    this.collided = (this.game.physics.arcade.overlap(this, this.game.player_obj)
    || this.game.physics.arcade.overlap(this, this.game.tower_grp));
    
    //change color symbolise collisions
    if(this.collided){
        this.tint = 0xff3333;
    }else{
        this.tint = 0x66ff66;
    }
    
    
    
    // left-click confirm
    if(this.game.input.activePointer.leftButton.isDown && !this.collided){
        switch(this.tower_name){
            case 'candycorn':
                this.game.tower_grp.add(this.game.add.existing(new Botan.CandyCornTower(this.game, this.x, this.y)));
                break;
            case 'polo':
                this.game.tower_grp.add(this.game.add.existing(new Botan.PoloTower(this.game, this.x, this.y)));
                break;
            case 'gumdrop':
                this.game.tower_grp.add(this.game.add.existing(new Botan.GumDropTower(this.game, this.x, this.y)));
                break;
        }
        
        this.destroy();
    }
    // right-click cancel
    else if(this.game.input.activePointer.rightButton.isDown){
        this.game.GUI_obj.addGold(100);
        this.destroy();
    }
    
};