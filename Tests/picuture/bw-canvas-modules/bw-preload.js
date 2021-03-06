"use strict";

var bw = bw || {};


bw.preload = (function ($) {

    var preload,
        jsLoadQueue = [

        ],

        imageLoadQueue = [
            /*grossglockner*/
            {src:"images/grossglockner_layer01_01.png", id:"grossglockner_layer01_01"},
            {src:"images/grossglockner_layer01_02.png", id:"grossglockner_layer01_02"},
            {src:"images/grossglockner_layer01_03.png", id:"grossglockner_layer01_03"},
            {src:"images/grossglockner_layer01_04.png", id:"grossglockner_layer01_04"},
            {src:"images/grossglockner_layer01_05.jpg", id:"grossglockner_layer01_05"},



        ],


        soundLoadQueue = [

        ];

    function load() {
        preload = new createjs.LoadQueue(true);

        createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
        preload.installPlugin(createjs.Sound);

        preload.loadManifest(jsLoadQueue);
        preload.loadManifest(soundLoadQueue);
        preload.loadManifest(imageLoadQueue);

        preload.addEventListener("fileload", handleFileLoad);
        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete, this);

    }
    
    function handleProgress(e) {
        //console.log(e)
    }

    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function handleComplete() {
        bw.pictureTest.init(document.getElementById("grossglockner"));
        //createjs.Sound.play("sound1");
    }


    load();



}($));
