"use strict";

bw = bw || {};

bw.modal = (function ($) {
    var modalBox;

    function init() {
        modalBox = $('#info-box-modal');

        $(document).keyup(function (e) {
           if(e.keyCode === 27) {
               if(modalBox.hasClass('show')) {
                   modalBox.modal("hide");
               } else {
                   bw.main.unregisterScene();
                   mh.main.closeCanvas();
               }
           }
        });

        // $('.grayoverlay').click(function () {
        //         bw.main.unregisterScene();
        //         mh.main.closeCanvas();
        // });
    }

    $(document).ready(init);
})($);