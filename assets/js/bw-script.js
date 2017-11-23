"use strict";
var bw = bw || {};


bw.main = (function ($) {

    var places, currentPlace, closeButton;


    function init() {
        places = $('.place');
        closeButton = $('close-canvas');


        places.click(function (e) {
            currentPlace = $(e.target.parentNode).attr('data-place');
        });

        closeButton.click(function () {
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