"use strict";

var bw = bw || {};


bw.sceneChanger = (function ($) {

    var scenes, currentScene, stage, direction, rootScene, parallaxLayers, parallaxLayerDampings, interactionObjects, sceneSounds,
        reset, sceneChangeSound, sceneChange,
        specialScene;

    function registerSceneChanger(scenes_, stage_, rootScene_, parallaxLayers_, parallaxLayerDampings_, interactionObjects_, sceneSounds_) {
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
        sceneSounds = addSceneSounds(sceneSounds_);

        rootScene.gotoAndStop(currentScene);
        scenes[currentScene].gotoAndPlay(1); //TODO so the animation starts at the beginning see flash file

        bw.action.registerAnimationDefaultActions(interactionObjects[currentScene]);
        bw.idle.setIdleObjects(interactionObjects[currentScene]);
        bw.parallax.registerParallax(parallaxLayers[currentScene], parallaxLayerDampings[currentScene], stage_);

        sceneSounds[currentScene] && sceneSounds[currentScene].play({loop: -1});

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

    function addSceneSounds(soundArray) {
        var returnArray = [];

        for(var key in soundArray) {
            if(typeof soundArray[key] === 'object'){
                returnArray[key] = soundArray[key];
            }

            else if(typeof soundArray[key] === 'string') {
                returnArray[key] = createjs.Sound.createInstance(soundArray[key]);
            }
        }
        return returnArray;
    }


    function changeScene() {
        bw.parallax.unregisterParallax();
        bw.action.unregisterAnimationDefaultActions();

        if (specialScene.active === true) {
            specialScene.sound && specialScene.sound.stop();
            specialScene.scene.gotoAndPlay("out");
            specialScene.active = false;
        }
        else {
            scenes[currentScene].gotoAndPlay("out");
        }

        if (sceneChangeSound) {
            sceneChangeSound.play();
        }

        sceneSounds[currentScene] && sceneSounds[currentScene].stop();
    }


    function registerSpecialScene(scene, parallaxLayers_, parallaxLayerDampings_, interactionObjects_, sceneSound_) {             //for the winter scene for example
        specialScene.scene = scene;
        specialScene.parallaxLayers = parallaxLayers_;
        specialScene.parallaxLayerDampings = parallaxLayerDampings_;
        specialScene.active = false;
        specialScene.interactionObjects = interactionObjects_;

        if(typeof sceneSound_ === 'object'){
            specialScene.sound = sceneSound_;
        }
        else if(typeof sceneSound_ === 'string'){
            specialScene.sound =createjs.Sound.createInstance(sceneSound_);
        }
    }

    function toggleSpecialScene() {
        if(specialScene.active === false) {
            specialScene.active = true;
            bw.parallax.unregisterParallax();
            scenes[currentScene].gotoAndPlay("out");
            sceneSounds[currentScene].stop();
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
        specialScene.sound && specialScene.sound.play({loop: -1});
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

        bw.main.changeInfoText();
        rootScene.gotoAndPlay(currentScene);

        sceneSounds[currentScene] && sceneSounds[currentScene].play({loop: -1});
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

            specialScene.sound && specialScene.sound.stop();
        }
        else {
            scenes[currentScene].gotoAndPlay('out');
            sceneSounds[currentScene] && sceneSounds[currentScene] .stop();
        }

        reset = true;
    }

    function setSceneChangeSound(sound) {
        if (typeof sound === "string") {
            sceneChangeSound = createjs.Sound.createInstance(sound);
        }

        else if (typeof sound === "object") {
            sceneChangeSound = sound;
        }
    }

    function isSpecialScene() {
        return specialScene.active;
    }


    return {
        registerSceneChanger: registerSceneChanger,
        changeScene: changeScene,
        getCurrentScene: getCurrentScene,
        unregisterSceneChanger: resetToDefault,
        setSceneChangeSound: setSceneChangeSound,
        registerSpecialScene: registerSpecialScene,
        toggleSpecialScene: toggleSpecialScene,
        isSpecialScene: isSpecialScene,
    }


}($));