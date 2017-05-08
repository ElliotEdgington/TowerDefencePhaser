// EYYY its wave generator time!!

var Botan = Botan || {};

Botan.WaveManager = function (game) {
    this.game = game;
    //delay between waves (s)
    this.wave_delay = 5;
    //delay between enemies (ms)
    this.enemy_delay = 1000;
    //waves be worth this much value
    this.gold_value = 1000;
    //wave
    this.wave_grp = this.game.add.group();
};


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
    };
    //waves after will prcedurally gen waves 
    
    
    //kill everything in group! blerr
    this.wave_grp.forEach(function(e) { e.kill(); });
    //start wave after timer
    this.game.time.events.add(Phaser.Timer.SECOND * this.wave_delay, this.startWave, this);
};


// a recursive function using phasers timer abilities to recurse throughout the wave
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

//checks if all enemies in wave are dead
Botan.WaveManager.prototype.checkWave  = function(){
    if(this.game.enemy_grp.length <= 0){
        this.nextWave();
    }
};


// ---- Preset Waves ---- pls ignor
Botan.WaveManager.prototype.wave1 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave2 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave3 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave4 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    return wave;
};

Botan.WaveManager.prototype.wave5 = function(){
    var wave = [];
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Big(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.GhostEnemy(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    wave.push(this.game.add.existing(new Botan.SkullEnemy_Fast(this.game)));
    return wave;
};