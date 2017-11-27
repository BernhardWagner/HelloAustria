"use strict";
var bw = bw || {};


bw.main = (function ($) {

    var places, currentPlace, closeButton, descriptions, descriptionTitleField, descriptionTextField;


    function init() {
        places = $('.place');
        closeButton = $('#close-canvas');
        descriptionTitleField = document.getElementById('description-title');
        descriptionTextField = document.getElementById('description-text');

        changeInfoText();

        /*initialize places*/
        bw.grossglockner.init(document.getElementById('grossglockner'));

        places.click(function (e) {
            currentPlace = $(e.target.parentNode).attr('data-place');

            switch (currentPlace) {
                case "grossglockner":
                    bw.grossglockner.register();
                    break;
            }

            changeInfoText();
        });

        closeButton.click(function () {
            switch (currentPlace) {
                case "grossglockner":
                    bw.grossglockner.unregister();
                    break;
            }

            currentPlace = null;
            changeInfoText();
        });

        bw.resizeMap.iconPosiontioningAndResize();
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
        init: init,
    }


}($));