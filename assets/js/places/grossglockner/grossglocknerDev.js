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
        stage.enableMouseOver(22);

        bw.idle.registerIdleHints(idleSeconds, stage);
    }


    function register() {
        var scene1InteractionObjects = [exportRoot.sc1.l1.wald, exportRoot.sc1.sonne],
            scene2InteractionsObjects = [exportRoot.sc2.l1.auto, exportRoot.sc2.l2.skifahrer],


            scene1Layers = [exportRoot.sc1.l1, exportRoot.sc1.l2, exportRoot.sc1.l3, exportRoot.sc1.l4],
            scene2Layers = [exportRoot.sc2.l1, exportRoot.sc2.l2],
            scene3Layers = [exportRoot.sc3.l1, exportRoot.sc3.l2, exportRoot.sc3.kletterer],

            scene1LayerParallaxDampings = [17,25,50, 100],
            scene2LayerParallaxDampings = [20,50],
            scene3LayerParallaxDampings = [20,45, 20];

        //sounds
        bw.action.addActionSound(exportRoot.sc2.l1.auto, 'gs_sc2_car');


        bw.sceneChanger.registerSceneChanger(
            [exportRoot.sc1, exportRoot.sc2, exportRoot.sc3],           //standard animaitons for scene "in", "action", "out"
            stage,
            exportRoot,
            [scene1Layers, scene2Layers, scene3Layers], //Scenes first array is first scene, second is second scene...
            [scene1LayerParallaxDampings, scene2LayerParallaxDampings, scene3LayerParallaxDampings],
            [scene1InteractionObjects, scene2InteractionsObjects], //second last array for interaction objects (also seperated per subscene)
            ['gs_sc1_ambience_spring', null , 'gs_sc3_ambience']); //last array for the sccene sounds

        registerSpecialScene();
        registerClimber();

        bw.idle.setStage(stage);

        createjs.Ticker.addEventListener("tick", tickHandler);
    }


    function registerSpecialScene() {
        bw.sceneChanger.registerSpecialScene(exportRoot.special, [exportRoot.special.l1, exportRoot.special.l2, exportRoot.special.l3, exportRoot.special.l4], [20, 50, 100, 200], [exportRoot.special.sonne2], 'gs_sc1_ambience_winter');

        exportRoot.sc1.sonne.cursor = "pointer";
        exportRoot.special.sonne2.cursor = "pointer";


        exportRoot.special.sonne2.addEventListener("click", function (e) {
            bw.sceneChanger.toggleSpecialScene();
        });

        exportRoot.sc1.sonne.addEventListener("click", function (e) {
            bw.sceneChanger.toggleSpecialScene();
        });
    }

    function registerClimber() {
        var yHover = exportRoot.sc3.kletterer.y - 10,
            hoverTimeout = 400;

        exportRoot.sc3.kletterer.hoverOK = true;
        exportRoot.sc3.kletterer.autoReset = false;

        exportRoot.sc3.kletterer.cursor = "pointer";
        exportRoot.sc3.kletterer.addEventListener('click', function (e) {
            if(e.currentTarget.currentLabel === 'action') {
                e.currentTarget.play();
            } else {
                e.currentTarget.gotoAndPlay('action');
            }
        });

        $(exportRoot.sc3.kletterer).on('klettererBack', function () {
            exportRoot.sc3.setChildIndex(exportRoot.sc3.kletterer, exportRoot.sc3.getChildIndex(exportRoot.sc3.kletterer) - 1);
            console.log(exportRoot.sc3.getChildIndex(exportRoot.sc3.kletterer));
            bw.parallax.setParallaxDampings([30,90,90]);
            exportRoot.sc3.gotoAndStop('klettererBack');
        });

        $(exportRoot.sc3.kletterer).on('klettererFront', function () {
            exportRoot.sc3.setChildIndex(exportRoot.sc3.kletterer, exportRoot.sc3.getChildIndex(exportRoot.sc3.kletterer) + 1);
            bw.parallax.setParallaxDampings([30,90,30]);
            exportRoot.sc3.gotoAndStop('klettererFront');
        });

        exportRoot.sc3.kletterer.addEventListener('mouseover', function (e) {
            exportRoot.sc3.kletterer.hoverOK && createjs.Tween.get(exportRoot.sc3.kletterer, {override: true}).to({y: yHover}, 400, createjs.Ease.linear);
            exportRoot.sc3.kletterer.hoverOK = false;

            setTimeout(function () {
                exportRoot.sc3.kletterer.hoverOK = true;
            }, hoverTimeout);
        });

        $(document).on("nextScene", function () {
            if(bw.sceneChanger.getCurrentScene() === 2){
                exportRoot.sc3.kletterer.gotoAndStop(0);
                bw.idle.addIdleObject(exportRoot.sc3.kletterer);
            }
        });




    }

    function unregisterClimber() {
        exportRoot.sc3.kletterer.removeAllEventListeners('click');
        $(exportRoot.sc3.kletterer).off('klettererFront');
        $(exportRoot.sc3.kletterer).off('klettererBack');
        exportRoot.sc3.kletterer.removeAllEventListeners('mouseover');
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
        unregisterClimber();
        bw.sceneChanger.unregisterSceneChanger();
        exportRoot.special.sonne2.removeAllEventListeners();
        exportRoot.sc1.sonne.removeAllEventListeners();
        createjs.Ticker.removeEventListener("tick", tickHandler);

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