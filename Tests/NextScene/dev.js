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

        stage.enableMouseOver(24);


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.subscene1, exportRoot.subscene2],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [[exportRoot.subscene1.l1, exportRoot.subscene1.l2, exportRoot.subscene1.l3], [exportRoot.subscene2.l1, exportRoot.subscene2.l2]], //Scenes first array is first scene, second is second scene...
            [[20,50,100], [20,50]], [[exportRoot.subscene1.l1.flower]]); //last array for interaction objects (also seperated per subscene)

        exportRoot.subscene1.l1.flower.addEventListener("mouseover", function () {
            console.log("nmousdf");         //TODO
        });

        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", tickHandler);
    }
    
    function tickHandler() {


        stage.update();
    }

    $(document).ready(init);


}($));