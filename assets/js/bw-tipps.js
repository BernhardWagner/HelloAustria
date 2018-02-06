"use strict";

var bw = bw || {};

bw.tippLoader = (function ($) {

    var xmlhttp = new XMLHttpRequest(),
        tipps,
        tippInject,
        i,
        oldPercentage,
        percentageSteps,
        canSwitch,
        stop,

    i = 0;
    oldPercentage = 0;
    percentageSteps = 30;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            tipps = JSON.parse(this.responseText);
        }
    };
    
    function init() {
        tippInject = $('#tipp');
        if(tipps) {
            percentageSteps = ~~(100 / Object.keys(tipps).length);
        }

        tippInject.click(function () {
           switchScene();
        });

        setTimeout(function () {
            canSwitch = true;
            injectTipps();
        },6000)
    }
    
    
    function injectTipps() {
        if(canSwitch) {
            //oldPercentage = percentage;
            canSwitch = false;

            switchScene();

            setTimeout(function () {
                canSwitch = true;
                !stop && injectTipps();
            }, 12000);

        }
    }

    function switchScene() {
        i++;

        if (i === Object.keys(tipps).length) {
            i = 0;
        }

        $(tippInject).addClass('fade-fx');

       setTimeout(function () {
           tippInject[0].innerHTML = tipps[i];
       }, 500);

        setTimeout(function () {
            $(tippInject).removeClass('fade-fx');
        }, 500);
    }


    function destroyTipps() {
        stop = true;
        tippInject.off('click');
    }

    $(document).ready(init);

    xmlhttp.open("GET", "tipps.json", true);
    xmlhttp.send();

    return {
        injectTipps: injectTipps,
        destroyTipps: destroyTipps,
    };

})($);

