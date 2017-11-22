"use strict";

var bw = bw || {};


bw.preload = (function ($) {

    var preload,
        loadQueue = [
            "NextScene.js",
            /*{id: "sound1", src: "./assets/sound.mp3"},*/
            {id: "whosh", src: "./assets/whoosh.wav"}
        ];


    function load() {
        preload = new createjs.LoadQueue(true);

        preload.installPlugin(createjs.Sound);

        preload.loadManifest(loadQueue);

        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete, this);

    }
    
    function handleProgress(e) {
        //console.log(e)
    }

    function handleComplete() {
        console.log("loaded");
        //createjs.Sound.play("sound1");
    }


    load();



}($));
