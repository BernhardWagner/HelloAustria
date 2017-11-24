"use strict";
var bw = bw || {};


bw.pictureTest = (function ($) {

    var canvas, stage, exportRoot, idleSeconds = 10;

    function init(canvas_) {
        canvas = canvas_;

        exportRoot = new lib.grossglockner();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        stage.mouseEnabled = true;
        stage.enableMouseOver(24);

        bw.idle.registerIdleHints(idleSeconds, stage);


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.sc1],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [[exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4]], //Scenes first array is first scene, second is second scene...
            [[20,50,100, 200]], [[exportRoot.sc1.l4.test]], []); //second last array for interaction objects (also seperated per subscene)


        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", tickHandler);

        console.log(exportRoot.sc1);

        bw.photo.registerPictureInteraction(exportRoot.sc1.l4.test, exportRoot.sc1.photo, null, exportRoot.sc1.photo.pic.close);

        $(document).on("keypress", function (e) {
            if(e.keyCode === 114) {

            }
            if(e.keyCode === 107) {
            }
        })
    }

    function tickHandler() {


        stage.update();
    }


    return {
        init: init,
    }


}($));
