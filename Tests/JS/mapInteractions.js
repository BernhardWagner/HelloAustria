"use strict";

var bw = bw || {};


bw.mapInteractions = (function ($, images) {

    function init() {
        $(".box").on("click", function() {
            $(this).addClass("fullScreen");

            //TODO X Button in Box bei Canvas oder globales X System und da klasse hinzufügen bei klick und entfernen bei klick auf X
        });
    }

    $(document).ready(init);


}($));
