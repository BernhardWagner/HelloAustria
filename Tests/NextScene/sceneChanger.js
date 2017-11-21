"use strict";

var bw = bw || {};


bw.sceneChanger = (function ($) {

    var scenes, currentScene, stage, direction, rootScene, parallaxLayers, parallaxLayerDampings, interactionObjects,
        reset, sceneChangeSound, sceneChange,
        specialScene;

    function registerSceneChanger(scenes_, stage_, rootScene_, parallaxLayers_, parallaxLayerDampings_, interactionObjects_) {
        rootScene = rootScene_;
        scenes = scenes_;
        currentScene = 0;
        direction = 'forward';
        parallaxLayers = parallaxLayers_;
        interactionObjects = interactionObjects_;
        parallaxLayerDampings = parallaxLayerDampings_;
        stage = stage_;
        reset = false;
        specialScene = {active: false};
        sceneChange = true;

        scenes[currentScene].gotoAndPlay(1); //TODO so the animation starts at the beginning see flash file

        bw.action.registerAnimationDefaultActions(interactionObjects[currentScene]);
        bw.idle.setIdleObjects(interactionObjects[currentScene]);
        bw.parallax.registerParallax(parallaxLayers[currentScene], parallaxLayerDampings[currentScene], stage_);

        $(document).on("nextScene", function () {
            if (specialScene.active === true) {
                specialSceneAction();
            }
            else {
                nextScene();
            }
        });


        stage.canvas.addEventListener("dblclick", changeScene);
    }


    function changeScene() {
        bw.parallax.unregisterParallax();
        bw.action.unregisterAnimationDefaultActions();

        if (specialScene.active === true) {
            specialScene.scene.gotoAndPlay("out");
            specialScene.active = false;

        }
        else {
            scenes[currentScene].gotoAndPlay("out");
        }

        if (sceneChangeSound) {
            sceneChangeSound.play();
        }
    }


    function registerSpecialScene(scene, parallaxLayers_, parallaxLayerDampings_, interactionObjects_) {             //for the winter scene for example
        specialScene.scene = scene;
        specialScene.parallaxLayers = parallaxLayers_;
        specialScene.parallaxLayerDampings = parallaxLayerDampings_;
        specialScene.active = false;
        specialScene.interactionObjects = interactionObjects_;
    }

    function toggleSpecialScene() {
        if(specialScene.active === false) {
            specialScene.active = true;
            bw.parallax.unregisterParallax();
            scenes[currentScene].gotoAndPlay("out");
        }

        else if (specialScene.active === true){
            sceneChange = false;
            changeScene();
        }

        if (sceneChangeSound) {
            sceneChangeSound.play();
        }

    }

    function specialSceneAction() {
        rootScene.gotoAndPlay('specialScene');
        bw.action.registerAnimationDefaultActions(specialScene.interactionObjects);
        bw.idle.setIdleObjects(specialScene.interactionObjects);
        bw.parallax.registerParallax(specialScene.parallaxLayers, specialScene.parallaxLayerDampings, stage);
        specialScene.scene.gotoAndPlay('in');
    }


    function nextScene() {
        if (reset) {
            reset = false;
            rootScene.gotoAndStop(0);
            currentScene = 0;
            return;
        }

        if(sceneChange) {
            if (currentScene === scenes.length - 1 && direction === 'forward') {
                direction = 'backward'
            }

            else if (currentScene === 0 && direction === 'backward') {
                direction = 'forward';
            }

            if (direction === 'forward') {
                currentScene++;
            }
            else if (direction === 'backward') {
                currentScene--;
            }
        }

        else {
            sceneChange = true;
        }

        rootScene.gotoAndPlay(currentScene);

        bw.action.registerAnimationDefaultActions(interactionObjects[currentScene]);
        bw.idle.setIdleObjects(interactionObjects[currentScene]);
        bw.parallax.registerParallax(parallaxLayers[currentScene], parallaxLayerDampings[currentScene], stage);
        scenes[currentScene].gotoAndPlay('in');
    }


    function getCurrentScene() {
        return currentScene;
    }

    function resetToDefault() {
        stage.canvas.removeEventListener("dblclick", changeScene);
        $(document).off("nextScene");
        bw.parallax.unregisterParallax();
        bw.action.unregisterAnimationDefaultActions();
        bw.idle.setIdleObjects([]);

        if(specialScene.active === true){
            specialScene.scene.gotoAndPlay('out');
        }
        else {
            scenes[currentScene].gotoAndPlay('out');
        }

        reset = true;
    }

    function setSceneChangeSound(sound) {
        if (typeof sound === "string") {
            console.log(sound);
            sceneChangeSound = createjs.Sound.createInstance(sound);
        }

        else if (typeof sound === "object") {
            sceneChangeSound = sound;
        }
    }


    return {
        registerSceneChanger: registerSceneChanger,
        changeScene: changeScene,
        getCurrentScene: getCurrentScene,
        unregisterSceneChanger: resetToDefault,
        setSceneChangeSound: setSceneChangeSound,
        registerSpecialScene: registerSpecialScene,
        toggleSpecialScene: toggleSpecialScene,
    }


}($));