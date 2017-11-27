"use strict";

var bw = bw || {};


bw.preload = (function ($) {

    var preload,
        scriptInjector,
        loadingPercentField,
        loadingPercentBar,
        loadingPercentBarMaxWidth,
        loadingWindow,
        loadedWindow,
        loadingScreenImages = [
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'5%'},           //TODO in eigene json auslagern
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'10%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'15%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'20%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'25%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'30%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'35%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'40%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'45%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'50%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'55%'},
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'60%'},

        ],

        jsLoadQueue = [
            {src: "assets/js/bw-canvas-modules/bw-parallax.js", id:'parallaxjs'},
            {src: "assets/js/bw-canvas-modules/bw-sceneChanger.js", id:'sceneChangerjs'},
            {src: "assets/js/bw-canvas-modules/bw-idleHint.js", id:'idleHintjs'},
            {src: "assets/js/bw-canvas-modules/bw-actions.js", id:'actionsjs'},

            /*Grossglockner*/
            {src:"assets/js/places/grossglockner/grossglockner.js", id:"grossglocknerjs"},
            {src: "assets/js/places/grossglockner/grossglocknerDev.js", id: "grossglocknerDevjs"},
        ],

        imageLoadQueue = [
            /*grossglockner*/
            {src:"assets/images/grossglockner/sc2/auto.png", id:"auto"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01.png", id:"grossglockner_layer01_01"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_01.png", id:"grossglockner_layer01_01_01"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_02.png", id:"grossglockner_layer01_01_02"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_03.png", id:"grossglockner_layer01_01_03"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_04.png", id:"grossglockner_layer01_01_04"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_05.png", id:"grossglockner_layer01_01_05"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_06.png", id:"grossglockner_layer01_01_06"},
            //{src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_06_1.png", id:"grossglockner_layer01_01_06_1"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_02.png", id:"grossglockner_layer01_02"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_03.png", id:"grossglockner_layer01_03"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_04.png", id:"grossglockner_layer01_04"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_05.jpg", id:"grossglockner_layer01_05"},
            {src:"assets/images/grossglockner/sc2/grossglockner_layer02_01.png", id:"grossglockner_layer02_01"},
            {src:"assets/images/grossglockner/sc2/grossglockner_layer02_02.png", id:"grossglockner_layer02_02"},
            {src:"assets/images/grossglockner/sc1/reh01.png", id:"reh01"},
            {src:"assets/images/grossglockner/sc1/reh02.png", id:"reh02"},
            {src:"assets/images/grossglockner/sc2/schifahrer.png", id:"schifahrer"}
        ],


        soundLoadQueue = [

        ];

    function load() {
        preload = new createjs.LoadQueue(true);
        scriptInjector = document.getElementById('scriptinjector');
        loadingPercentBar = document.getElementById('loading-bar');
        loadingPercentField = document.getElementById('loading-percent');
        loadingWindow = $('.preload');
        loadedWindow = $('.loaded');

        loadingPercentBarMaxWidth = $(loadingPercentBar.parentNode).width();

        createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
        preload.installPlugin(createjs.Sound);

        preload.loadFile('descriptions.json');
        preload.loadManifest(loadingScreenImages);
        preload.loadManifest(jsLoadQueue);
        preload.loadManifest(soundLoadQueue);
        preload.loadManifest(imageLoadQueue);
                                                        //TODO also preload every javascript!

        preload.addEventListener("fileload", handleFileLoad);
        preload.addEventListener("progress", handleProgress);
        preload.addEventListener("complete", handleComplete);

    }
    
    function handleProgress(e) {
       loadingPercentField.innerHTML = Math.round(e.progress * 100) + "%";
       loadingPercentBar.style.width = loadingPercentBarMaxWidth * e.progress + 'px';
    }

    function handleFileLoad(evt) {
        if (evt.item.type === "image") {
            console.log(evt.item);
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
