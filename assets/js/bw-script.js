"use strict";
var bw = bw || {};


bw.main = (function ($) {

    var places, currentPlace, closeButton, descriptions;


    function init() {
        places = $('.place');
        closeButton = $('close-canvas');

        console.log("jlkjl");


        /*initialize places*/
        bw.grossglockner.init(document.getElementById('grossglockner'));

        places.click(function (e) {
            currentPlace = $(e.target.parentNode).attr('data-place');

            switch (currentPlace) {
                case "grossglockner":
                    bw.grossglockner.register();
                    break;
            }
        });

        closeButton.click(function () {
            switch (currentPlace) {
                case "grossglockner":
                    bw.grossglockner.unregister();
                    break;
            }

           currentPlace = null;
        });
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


    return {
        getCurrentPlace: getCurrentPlace,
        getCurrentScene: getCurrentScene,
        setDescriptions: setDescriptions,
        init: init,
    }


}($));