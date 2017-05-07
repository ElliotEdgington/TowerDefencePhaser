var Botan = Botan || {};

Botan.GameOver = function() {}

Botan.GameOver.prototype = {
    
    preload:function(){
        console.log("Started GameOver");
    }
},
    
    create: function(){
        
        //Need to add more when assets are created
        this.background = this.game.add.tileSprite(0, 0, 800, 600, '');
        this.restartLevelButton = this.game.add.button(100, 100, '', this.onClickRestartLevelButton);
        this.restartButton = this.game.add.button(100, 200, '', this.onClickRestartButton);
        
        
    }
  
//Goes back to main menu
  onClickRestartButton: function(){
        console.log("clicked");
        this.game.state.start('MainMenu');
    },
        
//Plays back to Level1
 onClickRestartLevelButton: function(){
        console.log("clicked");
        this.game.state.start('Game');
    },