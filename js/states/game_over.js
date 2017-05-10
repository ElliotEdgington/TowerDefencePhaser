var Botan = Botan || {};

Botan.GameOver = function() {}

Botan.GameOver.prototype = {
    
    init: function(waves){
        this.waves = waves;
    },
    
    preload: function(){
        console.log("Started GameOver");
    },
    
    create: function(){
        this.game.add.text(GAMEWIDTH/2, GAMEHEIGHT/2, "You Lasted :\n" + this.waves +  " waves!");
        this.restartButton = this.game.add.button(GAMEWIDTH/2, GAMEHEIGHT - 200, 'button', this.onClickRestartButton);
    },
  
    onClickRestartButton: function(){
        console.log("clicked");
        this.game.state.start('MainMenu');
    }
};