"use strict";

var bw = bw || {};


bw.sceneChanger = (function ($) {

    var scenes, currentScene, stage, direction, rootScene, parallaxLayers, parallaxLayerDampings, interactionObjects, idleSeconds = 10;

    function registerSceneChanger(scenes_, stage_, rootScene_, parallaxLayers_, parallaxLayerDampings_, interactionObjects_) {
        rootScene = rootScene_;
        scenes = scenes_;
        currentScene = 0;
        direction = 'forward';
        parallaxLayers = parallaxLayers_;
        interactionObjects = interactionObjects_;
        parallaxLayerDampings = parallaxLayerDampings_;
        stage = stage_;

        bw.action.registerAnimationDefaultActions(interactionObjects[currentScene]);
        bw.idle.registerIdleHints(idleSeconds, stage);
        bw.idle.setIdleObjects(interactionObjects[currentScene]);
        bw.parallax.registerParallax(parallaxLayers[currentScene], parallaxLayerDampings[currentScene], stage_);

        $(document).on("nextScene", function () {
           nextScene();
        });



        stage.canvas.addEventListener("dblclick", function (evt) {
            changeScene();
        });
    }

    
    function changeScene() {
        bw.parallax.unregisterParallax();
        scenes[currentScene].gotoAndPlay("out");
    }


    function nextScene() {

        if(currentScene === scenes.length - 1 && direction === 'forward') {
            direction = 'backward'
        }

        else if(currentScene === 0 && direction === 'backward'){
            direction = 'forward';
        }

        if(direction === 'forward') {
            currentScene++;
        }
        else if (direction === 'backward') {
            currentScene--;
        }

        rootScene.gotoAndPlay(currentScene);
        scenes[currentScene].gotoAndPlay('in');

        bw.idle.setIdleObjects(interactionObjects[currentScene]);
        bw.parallax.registerParallax(parallaxLayers[currentScene], parallaxLayerDampings[currentScene], stage);
    }


    function getCurrentScene() {
        return currentScene;
    }




    return {
        registerSceneChanger: registerSceneChanger,
        changeScene: changeScene,
        getCurrentScene: getCurrentScene
    }


}($));