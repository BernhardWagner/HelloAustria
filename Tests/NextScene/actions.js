"use strict";

var bw = bw || {};


bw.action = (function ($) {

    var defaultActionObjects;

    function registerAnimationDefaultActions(actionObjects_) {
            defaultActionObjects = actionObjects_;

        actionObjects_[0].addEventListener("mouseover", function () {
            console.log("nmousdf");         //TODO on mouse over something should happen
        });

    }


    return {
        registerAnimationDefaultActions: registerAnimationDefaultActions,
    }


}($));