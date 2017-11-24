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
        bw.idle.registerIdleHints(idleSeconds, stage);


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.sc1],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [[exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4]], //Scenes first array is first scene, second is second scene...
            [[20,50,100, 200]], [], []); //secon last array for interaction objects (also seperated per subscene)



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