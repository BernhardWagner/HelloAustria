"use strict";

var bw = bw || {};


bw.parallax = (function ($) {

    var preload,
        manifest = [
            "Canon.wav",
            "img.jpg"
    ];
    
    
    function init() {
        var itemK;
        preload = new createjs.LoadQueue(true, "./assets/");

        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);  // need this so it doesn't default to Web Audio
        preload.installPlugin(createjs.Sound);

        for(itemK in manifest) {
            preload.loadFile(manifest[itemK]);
        }


        preload.addEventListener("error", handleError);

        preload.addEventListener('fileload', handleFileLoad);

        preload.addEventListener("progress", function (e) {
            console.log(e.loaded);
        });

    }
    
    
    function handleFileLoad() {

    }

    function handleError() {
        console.log("lfsdasdflj")
    }

    init();
    
    
    return {

    };


}($));