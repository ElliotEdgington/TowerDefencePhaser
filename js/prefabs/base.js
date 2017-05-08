//Main base the Enemies could gravivate towards

var Botan = Botan || {};


Botan.HomeBase = function (game, x, y) {
    var sprite = 'base_spr';
    Phaser.Sprite.call(this, Botan.game, x, y, sprite);
    this.game = game;
    this.anchor.setTo( 0.5, 0.6)
    
    //base stats
    this.defence = 10;
    
};


Botan.HomeBase.prototype = Object.create(Phaser.Sprite.prototype);
Botan.HomeBase.prototype.constructor = Botan.HomeBase;

Botan.HomeBase.prototype.removeDefence = function(){
    //remove 1 from the defense
    this.defence -= 1;
    this.game.GUI_obj.defence_text.setText('Defence : ' + this.defence);
    //if defense of base gets to 0 then gameover
    if(this.defence <= 0){
        //Destroyed animation if we have one
        //this.play('BOOOOOM');
        
        //Send to gameover
        this.game.state.start('MainMenu');

    }
};
