"use strict";

var bw = bw || {};


bw.parallax = (function ($) {

    var layers,
        dampingFactors,
        stage,
        initLayerPos;

    function registerParallax(layers_, layerdampings_, stage_) {
        layers = layers_;
        dampingFactors = layerdampings_;
        stage= stage_;

        setInitLayerPos();


        stage.addEventListener('stagemousemove', parallaxHandler);
    }

    function unregisterParallax() {
        var i = 0;

        for (var layer in layers) {             //reset init layer positions
            layers[layer].x = initLayerPos[i].x;
            layers[layer].y = initLayerPos[i].y;
            i++;
        }
        stage.removeEventListener('stagemousemove', parallaxHandler);
    }

    function setInitLayerPos() {
        initLayerPos = [];
        var i = 0;

        for (var layer in layers) {
            initLayerPos[i] = {
                "x": layers[layer].x,
                "y": layers[layer].y
            };
            i++;
        }
    }

    function parallaxHandler(e) {
        var horizontalValue = (e.stageX - stage.canvas.width / 2) * -1,
            verticalValue = (e.stageY - stage.canvas.height / 2) * -1,
            i = 0;

        for (var layer in layers) {
            layers[layer].x = initLayerPos[i].x + horizontalValue / dampingFactors[i];
            layers[layer].y = initLayerPos[i].y + verticalValue / dampingFactors[i];
            i++;
        }

        stage.update();

    }

    return {
        registerParallax: registerParallax,
        unregisterParallax: unregisterParallax,
    }


}($));