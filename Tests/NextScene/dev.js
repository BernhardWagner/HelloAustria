"use strict";
var bw = bw || {};


bw.devNextScene = (function ($) {

    var canvas, stage, exportRoot;

    function init() {
        canvas = document.getElementById("canvas");
        exportRoot = new lib.NextScene();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        stage.mouseEnabled = true;
        stage.enableMouseOver(24);


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.subscene1, exportRoot.subscene2],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [[exportRoot.subscene1.l1, exportRoot.subscene1.l2, exportRoot.subscene1.l3], [exportRoot.subscene2.l1, exportRoot.subscene2.l2]], //Scenes first array is first scene, second is second scene...
            [[20,50,100], [20,50]], [[exportRoot.subscene1.l1.flower]]); //last array for interaction objects (also seperated per subscene)

        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", tickHandler);

       /* $(document).on("keypress", function (e) {
            if(e.keyCode === 114) {
                bw.sceneChanger.unregisterSceneChanger();
            }
            if(e.keyCode === 102) {
                bw.sceneChanger.registerSceneChanger(
                    [exportRoot.subscene1, exportRoot.subscene2],           //standard animaitons for scene "in", "action", "out"
                    stage,
                    exportRoot,
                    [[exportRoot.subscene1.l1, exportRoot.subscene1.l2, exportRoot.subscene1.l3], [exportRoot.subscene2.l1, exportRoot.subscene2.l2]], //Scenes first array is first scene, second is second scene...
                    [[20,50,100], [20,50]], [[exportRoot.subscene1.l1.flower]]); //last array for interaction objects (also seperated per subscene)
            }
        })*/
    }
    
    function tickHandler() {


        stage.update();
    }

    $(document).ready(init);


}($));