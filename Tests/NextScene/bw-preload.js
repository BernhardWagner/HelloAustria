"use strict";

var bw = bw || {};


bw.parallax = (function ($) {

    var preload;
    
    
    function init() {
        preload = new createjs.LoadQueue(true);

        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);  // need this so it doesn't default to Web Audio
        preload.installPlugin(createjs.Sound);
        preload.loadManifest({src:"manifest.json", type:"manifest"});

        console.log(preload);

        preload.addEventListener("error", handleError);

        preload.addEventListener('fileload', handleFileLoad);

        preload.addEventListener("progress", function (e) {

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