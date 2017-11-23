"use strict";
var bw = bw || {};


bw.devNextScene = (function ($) {

    var canvas, stage, exportRoot, idleSeconds = 10;

    function init() {
      var libb = AdobeAn.getComposition("268F5A6346D1409884CFAEDC779F6205").getLibrary();
        canvas = document.getElementById("canvas");
        exportRoot = new libb.NextScene_HTML5Canvas();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        stage.mouseEnabled = true;
        stage.enableMouseOver(24);

        bw.idle.registerIdleHints(idleSeconds, stage);


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.subscene1, exportRoot.subscene2],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [[exportRoot.subscene1.l1, exportRoot.subscene1.l2, exportRoot.subscene1.l3], [exportRoot.subscene2.l1, exportRoot.subscene2.l2]], //Scenes first array is first scene, second is second scene...
            [[20,50,100], [20,50]], [[exportRoot.subscene1.l1.flower]], ["grkl-sc1-windsound", "grkl-sc2-windsound"]); //secon last array for interaction objects (also seperated per subscene)

        bw.sceneChanger.registerSpecialScene(exportRoot.specialScene, [exportRoot.specialScene.instance_2, exportRoot.specialScene.l2], [20, 50], [], "grkl-special-ambience"); //for witer scene for example


        bw.action.addActionSound(exportRoot.subscene1.l1.flower, "whosh");   //TO register action (on click) sounds

        //which sound should be played between scenes
        bw.sceneChanger.setSceneChangeSound("whosh");



        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", tickHandler);

        $(document).on("keypress", function (e) {
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

            if(e.keyCode === 107) {
                bw.sceneChanger.toggleSpecialScene();
            }
        })
    }

    function tickHandler() {


        stage.update();
    }

    $(document).ready(init);

    return {
        init: init,
    }


}($));
