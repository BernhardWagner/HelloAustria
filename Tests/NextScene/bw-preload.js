"use strict";

var bw = bw || {};


bw.preload = (function ($) {

    var preload,
        loadQueue = [
            "./assets/image.jpg",
            {id: "sound1", src: "./assets/sound.mp3"}
        ];


    function load() {
        preload = new createjs.LoadQueue(true);

        preload.installPlugin(createjs.Sound);

        preload.loadManifest(loadQueue);

        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete, this);

    }
    
    function handleProgress(e) {
        console.log(e.loaded)
    }

    function handleComplete() {
        createjs.Sound.play("sound1");
    }


    load();



}($));
