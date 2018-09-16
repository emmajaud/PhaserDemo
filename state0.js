var demo = {}, centerX = 1500/2, centerY = 1000/2, Suzy, speed = 10;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('Suzy', 'assets/spritesheets/Suzy (1).png', 320, 320);
        game.load.image('SUNSET', 'assets/backgrounds/SUNSET.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#ff66ff';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 5000, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var SUNSET = game.add.sprite(0, 0, 'SUNSET');

        Suzy = game.add.sprite(centerX, centerY, 'Suzy');
        Suzy.anchor.setTo(0.5, 0.5);
        Suzy.scale.setTo(1, 1);

        game.physics.enable(Suzy);
        Suzy.body.collideWorldBounds = true;

        Suzy.animations.add('walk', [0, 1]);

        game.camera.follow(Suzy);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            Suzy.scale.setTo(1, 1);
            Suzy.x += speed;
            Suzy.animations.play('walk', 6, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            Suzy.scale.setTo(-1, 1);
            Suzy.x -= speed;
            Suzy.animations.play('walk', 6, true);
        }
        else{
           Suzy.animations.stop('walk');
           Suzy.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            Suzy.y -= speed;
            if(Suzy.y < 860){
                Suzy.y = 860;
            }
        
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            Suzy.y += speed;
        }
    }
};

function changeState(i, stateNum){
    game.state.start('state' + stateNum)
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);

}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

}