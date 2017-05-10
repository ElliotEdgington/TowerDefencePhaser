/*
 * This is where the real brains of the game take place.
 * The wave generator has 5 preset waves to start the player off.
 * We decided to make presets so that we can tweak game
 * balance easier before getting into pseudo random - procedural
 * generation.
 */

var Botan = Botan || {};

Botan.WaveManager = function (game) {
    this.game = game;
    //delay between waves (s)
    this.wave_delay = 5;
    //delay between enemies (ms)
    this.enemy_delay = 1000;
    //waves be worth this much value
    this.wave_gold_value = 600;
    //wave
    this.wave_grp = this.game.add.group();
};

/*
 * This function gets the next wave of enemies and places them in 
 * a group to be used later.
 * It then starts the timer to start the wave.
 */

Botan.WaveManager.prototype.nextWave = function(){
    //clear wave
    this.game.wave += 1;
    this.game.GUI_obj.wave_text.setText('Wave : ' + this.game.wave);
    this.wave_grp.removeAll();
    // waves 1-5 are preset and the same 
    if(this.game.wave <= 5){
        switch(this.game.wave){
            case 1:
                this.wave_grp.addMultiple(this.wave1());
                break;
            case 2:
                this.wave_grp.addMultiple(this.wave2());
                break;
            case 3:
                this.wave_grp.addMultiple(this.wave3());
                break;
            case 4:
                this.wave_grp.addMultiple(this.wave4());
                break;
            case 5:
                this.wave_grp.addMultiple(this.wave5());
                break;
                
        }
    }else{
        //waves after will prcedurally gen waves 
        this.wave_grp.addMultiple(this.genWave(this.wave_gold_value));
    }
    
    //kill everything in group! blerr
    this.wave_grp.forEach(function(e) { e.kill(); });
    //start wave after timer
    this.game.time.events.add(Phaser.Timer.SECOND * this.wave_delay, this.startWave, this);
};


/*
 * Using phasers timers we could create a recursive function that
 * goes through all the object stored in the wave group.
 * On every loop, a new enemy is revived creating the illusion
 * that a long string of enemies is coming during the wave.
 */
Botan.WaveManager.prototype.startWave = function(){
    if(this.wave_grp.length > 0){
        this.game.time.events.add(this.enemy_delay, this.startWave, this);
        //gets random enemy from wave
        var index = this.game.rnd.integerInRange(0,this.wave_grp.length - 1);
        var enemy = this.wave_grp.getAt(index).revive();
        this.wave_grp.removeChildAt(index);
        //sends object to enemy group
        this.game.enemy_grp.add(enemy);
    }
};

/*
 * Checks if all the enemies in the wave are dead. If so, then
 * start the next wave.
 */
Botan.WaveManager.prototype.checkWave  = function(){
    if(this.game.enemy_grp.length <= 0){
        this.nextWave();
    }
};



/*
 * After wave 5 the program uses pseudo generation to create waves.
 * A gold value is given as a parameter to this function and then
 * the function adds enemies to the wave until the value of
 * all enemies in the wave equals the value passed in.
 * The wave value is then multiplied by 1.5 for the next wave to be harder
 * and worth more than this one.
 */
Botan.WaveManager.prototype.genWave = function(value){
    var wave = [];
    var refercence_grp_length = this.game.enemy_reference_grp.length
    while(value >= 0){
        var index = this.game.rnd.integerInRange(0, refercence_grp_length - 1);
        var enemy = this.game.enemy_reference_grp.getAt(index);
        wave.push(this.getEnemy(enemy));
        value -= enemy.gold_value;
    }
    this.wave_gold_value *= 1.5;
    return wave;
};

/*
 * Uses the enemy references to determine what type of enemy to create
 * while generating new waves.
 */
Botan.WaveManager.prototype.getEnemy = function(e){
    var enemy = e;
    switch(e.name){
        case "skullEnemy":
            enemy = this.game.add.existing(new Botan.SkullEnemy(this.game));
            break;
        case "skullEnemy_Big":
            enemy = this.game.add.existing(new Botan.SkullEnemy_Big(this.game));
            break;
        case "skullEnemy_Fast":
            enemy = this.game.add.existing(new Botan.SkullEnemy_Fast(this.game));
            break;
        case "skullEnemy_Boss":
            enemy = this.game.add.existing(new Botan.SkullEnemy_Boss(this.game));
            break;
        case "ghostEnemy":
            enemy = this.game.add.existing(new Botan.GhostEnemy(this.game));
            break;
    }
    return enemy;
};


/*
 * The preset waves 1-5 that can be tweaked for game balance.
 */

Botan.WaveManager.prototype.wave1 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave2 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave3 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave4 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave5 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Boss(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    return wave;
};
