"use strict";

var bw = bw || {};

const DEBUG = true;

bw.test1 = (function ($, images) {

    var canvas, stage, exportRoot, scenes, currentScene, state, sceneNext, currentSceneIndex, i;

    function init() {
        canvas = document.getElementById("canvas");
        images = images || {};
        scenes = [];
        currentScene = "Szene 1";
        currentSceneIndex = 0;
        state = "stable";

        var manifest = [
            {src: "images/Bitmap1.png", id: "Bitmap1"}
        ];

        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(manifest);
    }

    function handleFileLoad(evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
    }


    function registerScenes() {
        scenes["Szene 1"] = bw.scene1;
        scenes["Szene 2"] = bw.scene2;
    }

    function handleComplete() {
        exportRoot = new lib.Test1();

        registerScenes();
        stage = new createjs.Stage(canvas);
        bw.scene1.load(canvas, stage, exportRoot);

        $(document).keyup(keyEvents);


        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", handleTick);

        DEBUG && console.log(lib);
    }


    function handleTick(event) {

       for(var key in scenes) {
           if(key === currentScene){
               scenes[currentScene].interactions();
           }
       }

        /*
        switch (currentScene) {
            case "Szene 1":
                scene1Interactions();
                break;

            case "Szene 2":
                bw.scene2.interactions();
                break;
        }
*/
        if (state == "changeScene") {
            /*
             stage.removeAllChildren();
             stage.addChild(exportRoot);                         //TODO alles von scene 1 auch in scene 1 geben

             exportRoot.gotoAndStop(++currentSceneIndex);

             currentScene = scenes[currentSceneIndex];
             state = "stable";
             */


            if (sceneNext == null) {
                for(var key in scenes) {
                    if(key === currentScene){
                        scenes[currentScene].unload();
                        scenes[currentScene].load(canvas, stage, exportRoot);
                    }
                }

                sceneNext = new lib.Test1();
                sceneNext.gotoAndStop(++currentSceneIndex);
                stage.addChild(sceneNext);
                centerPivot(sceneNext);
                sceneNext.alpha = 0;
                sceneNext.scaleX = sceneNext.scaleY = 0.5;


                //changes pivot of scene (where to zoom in)
                exportRoot.regX += 500;
                exportRoot.regY += 500;
                exportRoot.x += 500;
                exportRoot.y += 500;
            }

            else if (sceneNext.alpha < 1) {
                exportRoot.alpha -= 0.1;
                exportRoot.scaleX = exportRoot.scaleY += 0.05;
                sceneNext.scaleX = sceneNext.scaleY += 0.05;
                sceneNext.alpha += 0.1;
            }

            else {
                sceneNext.alpha = 1;
                stage.removeChild(exportRoot);
                exportRoot = sceneNext;

                stage.addChild(exportRoot);

                sceneNext = null;

                currentScene = scenes[currentSceneIndex];           //TODO andere möglichkeit um zusagen wie die szene gewechselt werden soll

                /*for(var key in scenes) {
                    if(key === currentScene){
                        scenes[currentScene].load(canvas, stage, exportRoot);
                    }
                }*/

                state = "stable";
            }

        }

        stage.update(event);
    }


    function centerPivot(object){
        object.regX = object.nominalBounds.width/2.0;
        object.regY = object.nominalBounds.height/2.0;
        object.x += object.regX;
        object.y += object.regY;
    }


    function keyEvents() {
        switch (event.keyCode) {
            case 27:
                nextScene();
                break;
            case 88:
                console.log(exportRoot.alpha);
                console.log(nextScene());
                break;
        }
    }


    function nextScene() {
        state = "changeScene";
    }


    //TODO diese Dinge in eigene Files (module) auslagern

    //TODO load scene und unload scene funktionen machen um events to registreiren oder zu entfernen
    function scene2Interactions() {
        stage.update();
    }

    window.onload = function () {
        init();
    };

}($));
