"use strict";
var bw = bw || {};


bw.hallstatt = (function ($) {

    var canvas, stage, exportRoot, idleSeconds = 10;

    function init(canvas_) {
        canvas = canvas_;
        exportRoot = new lib.hallstatt();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        stage.mouseEnabled = true;
        stage.enableMouseOver(22);
    }


    function register() {
        var scene1InteractionObjects = [],
            scene2InteractionsObjects = [],
            scene3InteractionsObjects = [],


            scene1Layers = [exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4, exportRoot.sc1.l5],
            scene2Layers = [exportRoot.sc2.l1, exportRoot.sc2.l2],
            scene3Layers = [exportRoot.sc3.l1, exportRoot.sc3.l2, exportRoot.sc3.l3],

            scene1LayerParallaxDampings = [25,50,60,100,150],
            scene2LayerParallaxDampings = [20,50],
            scene3LayerParallaxDampings = [20,50,70];


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.sc1, exportRoot.sc2, exportRoot.sc3],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [scene1Layers, scene2Layers, scene3Layers], //Scenes first array is first scene, second is second scene...
            [scene1LayerParallaxDampings, scene2LayerParallaxDampings, scene3LayerParallaxDampings],
            [scene1InteractionObjects, scene2InteractionsObjects, scene3InteractionsObjects], //second last array for interaction objects (also seperated per subscene)
            []); //last array for the sccene change sounds

            bw.idle.setStage(stage);

        createjs.Ticker.addEventListener("tick", tickHandler);


        //picture
        //bw.photo.registerPictureInteraction(exportRoot.sc3.l2.steinGR.photoTrigger, exportRoot.sc3.photo, null, exportRoot.sc3.photo.pic.close);

    }


    //TODO: is needed?
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }

    function unregister() {
        bw.sceneChanger.unregisterSceneChanger();
        createjs.Ticker.removeEventListener("tick", tickHandler);
        //bw.photo.unregisterPictureIntearction();

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