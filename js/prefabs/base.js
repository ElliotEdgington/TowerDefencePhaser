//Main base the Enemies could gravivate towards

var Botan = Botan || {};


Boton.HomeBase = function (game) {
    var sprite = '';
    var x = 250;
    var y = 200;
    Botan.Base.call(this, game, x, y, sprite);
    
    //Possible factors of base
    this.defense = 100;
    this.armour = 0;
    
}

Botan.HomeBase.update = function() {
    
    
}

//if defense of base gets to 0 then gameover
if(this.defense <= 0){
    this.destory();
    //Destroyed animation if we have one
    this.play('BOOOOOM');
    
    //Send to gameover
    this.game.state.start('Game Over');
    
}