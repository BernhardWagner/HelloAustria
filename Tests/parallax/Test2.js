"use strict";

var bw = bw || {};

const DEBUG = true;

bw.test2 = (function ($) {

    var canvas, stage, exportRoot;

    function init() {
        canvas = document.getElementById("canvas");
        exportRoot = new lib.Unbenannt1();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        stage.enableMouseOver(24);

        bw.parallax.registerParallax([exportRoot.layer1, exportRoot.layer2, exportRoot.layer3], [20,50,100,180], stage);
        bw.idle.setIdleHint(5, [exportRoot.layer1], stage);

        exportRoot.layer1.addEventListener("mouseover", function () {
            console.log("nmousdf");         //TODO on mouse over something should happen
        });

        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", handleTick);

    }


    function handleTick(event) {




        stage.update(event);
    }



    window.onload = function () {
        init();
    };

}($));