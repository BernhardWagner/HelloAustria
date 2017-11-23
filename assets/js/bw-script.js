"use strict";
var bw = bw || {};


bw.main = (function ($) {

    var places, currentPlace, closeButton;


    function init() {
        places = $('.place');
        closeButton = $('close-canvas');


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


    $(document).ready(init);


    return {
        getCurrentPlace: getCurrentPlace,
    }


}($));