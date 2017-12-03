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

        bw.idle.registerIdleHints(idleSeconds, stage);
    }


    function register() {
        var scene1InteractionObjects = [exportRoot.sc1.l1.wald, exportRoot.sc1.sonne],
            scene2InteractionsObjects = [exportRoot.sc2.l1.auto, exportRoot.sc2.l2.skifahrer],


            scene1Layers = [exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4],
            scene2Layers = [exportRoot.sc2.l1, exportRoot.sc2.l2],
            scene3Layers = [exportRoot.sc3.l1, exportRoot.sc3.l2],

            scene1LayerParallaxDampings = [20,50,100, 200],
            scene2LayerParallaxDampings = [20,80],
            scene3LayerParallaxDampings = [30,90];


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.sc1, exportRoot.sc2, exportRoot.sc3],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [scene1Layers, scene2Layers, scene3Layers], //Scenes first array is first scene, second is second scene...
            [scene1LayerParallaxDampings, scene2LayerParallaxDampings, scene3LayerParallaxDampings],
            [scene1InteractionObjects, scene2InteractionsObjects], //second last array for interaction objects (also seperated per subscene)
            []); //last array for the sccene change sounds

        registerSpecialScene();


    }


    function registerSpecialScene() {
        var hoverOk;

        hoverOk = true;

        bw.sceneChanger.registerSpecialScene(exportRoot.special, [exportRoot.special.l1, exportRoot.special.l2, exportRoot.special.l3, exportRoot.special.l4], [20, 50, 100, 200], [exportRoot.special.sonne2], null);

        exportRoot.sc1.sonne.cursor = "pointer";
        exportRoot.special.sonne2.cursor = "pointer";


        exportRoot.special.sonne2.addEventListener("click", function (e) {
            bw.sceneChanger.toggleSpecialScene();
        });

        exportRoot.sc1.sonne.addEventListener("click", function (e) {
            bw.sceneChanger.toggleSpecialScene();
        });

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
        exportRoot.special.sonne.removeAllEventListeners();
        exportRoot.sc1.sonne.removeAllEventListeners();

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