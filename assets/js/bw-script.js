"use strict";
var bw = bw || {};


bw.main = (function ($) {

    var places, currentPlace, closeButton, descriptions, descriptionTitleField, descriptionTextField;


    function init() {
        places = $('.place');
        closeButton = $('#close-canvas');
        descriptionTitleField = document.getElementById('description-title');
        descriptionTextField = document.getElementById('description-text');

        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(30);

        changeInfoText();

        /*initialize places*/
        bw.grossglockner.init(document.getElementById('grossglockner'));
        bw.gruenersee.init(document.getElementById('gruenersee'));
       bw.hallstatt.init(document.getElementById('hallstatt'));

        places.click(function (e) {
            currentPlace = $(e.target.parentNode).attr('data-place');

            switch (currentPlace) {
                case "grossglockner":
                    bw.grossglockner.register();
                    break;

                case "gruenersee":
                    bw.gruenersee.register();
                    break;

                case "hallstatt":
                    bw.hallstatt.register();
                    break;
            }

            changeInfoText();
        });

        closeButton.click(unregisterScene);

        bw.resizeMap.iconPosiontioningAndResize();
    }

    function unregisterScene() {
        switch (currentPlace) {
            case "grossglockner":
                bw.grossglockner.unregister();
                break;

            case "gruenersee":
                bw.gruenersee.unregister();
                break;

            case "hallstatt":
                bw.hallstatt.unregister();
                break;
        }

        currentPlace = null;
        changeInfoText();
    }

    function getCurrentPlace() {
        return currentPlace;
    }

    function getCurrentScene() {
        return bw.sceneChanger.getCurrentScene();
    }


    function setDescriptions(descriptions_) {
        descriptions = descriptions_;
    }
    
    function changeInfoText() {
        if(!currentPlace) {
            descriptionTitleField.innerHTML = descriptions['map'][0]['title'];
            descriptionTextField.innerHTML = descriptions['map'][0]['text'];
        }

        else {
            descriptionTitleField.innerHTML = descriptions[currentPlace][getCurrentScene()]['title'];
            descriptionTextField.innerHTML = descriptions[currentPlace][getCurrentScene()]['text'];
        }
    }


    return {
        getCurrentPlace: getCurrentPlace,
        getCurrentScene: getCurrentScene,
        setDescriptions: setDescriptions,
        changeInfoText: changeInfoText,
        unregisterScene: unregisterScene,
        init: init,
    }


}($));

function playSound(string) {
    createjs.Sound.play(string);
}