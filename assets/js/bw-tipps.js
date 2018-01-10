"use strict";

var bw = bw || {};

bw.tippLoader = (function ($) {

    var xmlhttp = new XMLHttpRequest(),
        tipps,
        tippInject,
        i,
        oldPercentage,
        percentageSteps;

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
    }
    
    
    function injectTipps(percentage) {
        if(percentage > oldPercentage + percentageSteps) {
            oldPercentage = percentage;
            i++;
            tippInject[0].innerHTML = tipps[i];
        }
    }

    $(document).ready(init);

    xmlhttp.open("GET", "tipps.json", true);
    xmlhttp.send();

    return {
        injectTipps: injectTipps
    };

})($);

