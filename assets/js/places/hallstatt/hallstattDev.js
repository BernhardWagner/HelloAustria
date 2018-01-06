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
        var scene1InteractionObjects = [exportRoot.sc1.l4.kirche, exportRoot.sc1.l3.pier],
            scene2InteractionsObjects = [exportRoot.sc2.l2.fenster, exportRoot.sc2.l2.tuer, exportRoot.sc2.l2.lampe],
            scene3InteractionsObjects = [exportRoot.sc3.l2.photoTrigger, exportRoot.sc3.l2.tuerSalzwerk],


            scene1Layers = [exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4, exportRoot.sc1.l5],
            scene2Layers = [exportRoot.sc2.l1, exportRoot.sc2.l2],
            scene3Layers = [exportRoot.sc3.l1, exportRoot.sc3.l2, exportRoot.sc3.l3],

            scene1LayerParallaxDampings = [30,50,60,65,150],
            scene2LayerParallaxDampings = [30,50],
            scene3LayerParallaxDampings = [40,50,70];


        //action sounds (can also also be added in flash file under the action animation)
        bw.action.addActionSound(exportRoot.sc1.l4.kirche, 'hs_sc1_churchBell');


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

        //pier special
        exportRoot.sc1.l3.pier.addEventListener("click", boatAction);

        //lampe special
        exportRoot.sc2.l2.lampe.addEventListener("click", lampAction);


        //picture
        bw.photo.registerPictureInteraction(exportRoot.sc3.l2.photoTrigger, exportRoot.sc3.photo, null, exportRoot.sc3.photo.pic.close);

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
        exportRoot.sc1.l3.pier.removeEventListener("click", boatAction);
        exportRoot.sc2.l2.lampe.removeEventListener("click", lampAction);
        createjs.Ticker.removeEventListener("tick", tickHandler);
        //bw.photo.unregisterPictureIntearction();

    }

    function tickHandler() {


        stage.update();
    }

    function boatAction(e) {
        var boat = exportRoot.sc1.l4.schiff;

        if(boat.currentLabel === 'away') {
            boat.gotoAndPlay('drive in');
        } else if (boat.currentLabel === 'in hafen') {
            boat.gotoAndPlay('drive out');
        }
    }

    function lampAction(e) {
        var lamp = exportRoot.sc2.l2.lampe;

        if(lamp.lampeLicht.currentLabel === 'aus') {
            lamp.lampeLicht.gotoAndPlay('an');
        } else {
            lamp.lampeLicht.gotoAndPlay('aus');
        }
    }

    return {
        init: init,
        register: register,
        unregister: unregister,
    }


}($));