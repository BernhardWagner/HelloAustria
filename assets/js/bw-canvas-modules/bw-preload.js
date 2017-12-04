"use strict";

var bw = bw || {};


bw.preload = (function ($) {

    var preload,
        scriptInjector,
        loadingPercentField,
        loadingWindow,
        loadedWindow,
        firstPreloadImageLoaded,
        loadingImageInjector,
        preloadingImages,
        currentPercentStep,

        jsLoadQueue = [
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'parallaxjs'},
            {src: "assets/js/bw-canvas-modules/bw-sceneChanger.js", id:'sceneChangerjs'},
            {src: "assets/js/bw-canvas-modules/bw-idleHint.js", id:'idleHintjs'},
            {src: "assets/js/bw-canvas-modules/bw-actions.js", id:'actionsjs'},
        ],


        soundLoadQueue = [

        ];

    function load() {
        preload = new createjs.LoadQueue(true);
        scriptInjector = document.getElementById('scriptinjector');
        loadingPercentField = document.getElementById('loading-percent');
        loadingWindow = $('.preload');
        loadedWindow = $('.loaded');
        loadingImageInjector = $('#loadingImageInjector');
        preloadingImages = [];
        currentPercentStep = 0;

        createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
        preload.installPlugin(createjs.Sound);

        preload.loadFile('descriptions.json');
        preload.loadManifest("loading-files/loading-screen-manifest.json");
        preload.loadManifest(jsLoadQueue);
        preload.loadManifest(soundLoadQueue);
        preload.loadManifest("loading-files/grossglockner-manifest.json");
                                                        //TODO also preload every javascript!

        preload.addEventListener("fileload", handleFileLoad);
        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete);

    }
    
    function handleProgress(e) {
       loadingPercentField.innerHTML = Math.round(e.progress * 100) + "%";

       if(firstPreloadImageLoaded && preloadingImages !== [] && e.progress * 100 > currentPercentStep) {
           loadingImageInjector.append(preloadingImages.shift());
           currentPercentStep += 5;
       }
    }

    function handleFileLoad(evt) {
        if(evt.item.data === 'preloadImg') {
            firstPreloadImageLoaded = true;
            preloadingImages.push(evt.result);
        }

        else if (evt.item.type === "image") {
            images[evt.item.id] = evt.result;
        }

        else if (evt.item.id === 'descriptions.json') {
                bw.main.setDescriptions(evt.result);
        }

        else if(evt.item.type === 'javascript') {
            scriptInjector.appendChild(evt.result);
        }
    }

    function handleComplete() {
        console.log("loaded");
        bw.resizeMap.iconPosiontioningAndResize();
        loadingWindow.addClass('hidden');
        loadedWindow.removeClass('hidden');
        bw.main.init();
        //createjs.Sound.play("sound1");
    }


    $(document).ready(load);



}($));
