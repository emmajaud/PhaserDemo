demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff66ff';
        console.log('state7');
        addChangeStateEventListeners();

    },
    update: function(){},
};