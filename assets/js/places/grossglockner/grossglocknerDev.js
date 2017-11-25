"use strict";
var bw = bw || {};


bw.grossglockner = (function ($) {

    var canvas, stage, exportRoot, idleSeconds = 10;

    function init(canvas_) {
        canvas = canvas_;
        exportRoot = new lib.grossglockner();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        stage.mouseEnabled = true;
        stage.enableMouseOver(24);

        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", tickHandler);
    }


    function register() {
        var scene1InteractionObjects = [exportRoot.sc1.l1.wald],
            scene2InteractionsObjects = [exportRoot.sc2.l1.auto, exportRoot.sc2.l2.skifahrer];

        bw.idle.registerIdleHints(idleSeconds, stage);


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.sc1, exportRoot.sc2],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [[exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4], [exportRoot.sc2.l1, exportRoot.sc2.l2]], //Scenes first array is first scene, second is second scene...
            [[20,50,100, 200], [20,80]], [scene1InteractionObjects, scene2InteractionsObjects], []); //second last array for interaction objects (also seperated per subscene)



    }

    function unregister() {
            bw.sceneChanger.unregisterSceneChanger();
    }
    
    function tickHandler() {


        stage.update();
    }

    return {
        init: init,
        register: register,
        unregister: unregister,
    }


}($));