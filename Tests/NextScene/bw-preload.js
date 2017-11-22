"use strict";

var bw = bw || {};


bw.preload = (function ($) {

    var preload,
        loadQueue = [
            "NextScene.js",
            /*{id: "sound1", src: "./assets/sound.mp3"},*/
            {id: "whosh", src: "./assets/whoosh.wav"},                //TODO: working with sound sprites?
            {id: "grkl-sc1-windsound", src: "./assets/grkl-windsound1.ogg"},
            {id: "grkl-sc2-windsound", src: "./assets/grkl-windsound2.mp3"},
            {id: "grkl-special-ambience", src: "./assets/grkl-ambienceSpring.mp3"}
        ];


    function load() {
        preload = new createjs.LoadQueue(true);

        createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
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
