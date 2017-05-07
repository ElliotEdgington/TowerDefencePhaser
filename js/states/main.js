//This file is the first to run on the webpage.
//It creates the phaser game that we will use throughout the project.

//The overseer object that holds the whole game
var Botan = Botan || {};

// screen size - Either change this or use the scale manager.
var GAMEHEIGHT = 600;
var GAMEWIDTH = 800;

var GAMETITLE = "TowerDefence"

// phaser game
Botan.game = new Phaser.Game(GAMEWIDTH, GAMEHEIGHT, Phaser.AUTO, GAMETITLE);


//Adding states to the game and storing them in the game object

Botan.game.state.add('Boot', Botan.Boot);
Botan.game.state.add('Preload', Botan.Preload);
Botan.game.state.add('MainMenu', Botan.MainMenu);
Botan.game.state.add('LevelSelect', Botan.LevelSelect);
Botan.game.state.add('GameOver', Botan.GameOver);


//Main Game state - may split into different states if different modes are added
// i.e endless mode
Botan.game.state.add('Game', Botan.Game);
Botan.game.state.add('Level2', Botan.Level2);
Botan.game.state.add('Level3', Botan.Level3);


//
Botan.game.state.start('Boot');
