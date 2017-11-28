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
        loadingScreenImages = [
            {src: "assets/images/loading/loadingscreen_05.png", id:'5%', data: 'preloadImg'},           //TODO in eigene json auslagern
            {src: "assets/images/loading/loadingscreen_10.png", id:'10%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_15.png", id:'15%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_20.png", id:'20%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_25.png", id:'25%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_30.png", id:'30%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_35.png", id:'35%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_40.png", id:'40%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_45.png", id:'45%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_50.png", id:'50%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_55.png", id:'55%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_60.png", id:'60%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_65.png", id:'65%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_70.png", id:'70%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_75.png", id:'75%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_80.png", id:'80%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_85.png", id:'85%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_90.png", id:'90%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_95.png", id:'95%', data: 'preloadImg'},
            {src: "assets/images/loading/loadingscreen_100.png", id:'100%', data: 'preloadImg'},
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
            {src:"assets/images/grossglockner/sc1/baum02.png", id:"baum02"},
            {src:"assets/images/grossglockner/sc1/baum04.png", id:"baum04"},
            {src:"assets/images/grossglockner/sc1/baum05.png", id:"baum05"},
            {src:"assets/images/grossglockner/sc1/Baum08.png", id:"Baum08"},
            {src:"assets/images/grossglockner/sc1/baum09.png", id:"baum09"},
            {src:"assets/images/grossglockner/sc1/baumstümfpe.png", id:"baumstümfpe"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01.png", id:"grossglockner_layer01_01"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_01.png", id:"grossglockner_layer01_01_01"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_06.png", id:"grossglockner_layer01_01_06"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_01_06_1.png", id:"grossglockner_layer01_01_06_1"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_02.png", id:"grossglockner_layer01_02"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_03.png", id:"grossglockner_layer01_03"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_04.png", id:"grossglockner_layer01_04"},
            {src:"assets/images/grossglockner/sc1/grossglockner_layer01_05.jpg", id:"grossglockner_layer01_05"},
            {src:"assets/images/grossglockner/sc1/Grossglockner_Reh01.png", id:"Grossglockner_Reh01"},
            {src:"assets/images/grossglockner/sc1/Grossglockner_Reh02.png", id:"Grossglockner_Reh02"},
            {src:"assets/images/grossglockner/sc1/Grossglockner_Reh03.png", id:"Grossglockner_Reh03"},
            {src:"assets/images/grossglockner/sc1/Grossglockner_Reh04.png", id:"Grossglockner_Reh04"},
            
            {src:"assets/images/grossglockner/sc2/grossglockner_layer02_01.png", id:"grossglockner_layer02_01"},
            {src:"assets/images/grossglockner/sc2/grossglockner_layer02_02.png", id:"grossglockner_layer02_02"},
            {src:"assets/images/grossglockner/sc2/schifahrer.png", id:"schifahrer"},
            {src:"assets/images/grossglockner/sc2/auto.png", id:"auto"},
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
