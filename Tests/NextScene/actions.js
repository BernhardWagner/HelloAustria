"use strict";

var bw = bw || {};


bw.action = (function ($) {

    var defaultActionObjects;

    function registerAnimationDefaultActions(actionObjects_) {
            defaultActionObjects = actionObjects_;


            //TODO register mouse over out and click interactions

    }


    return {
        registerAnimationDefaultActions: registerAnimationDefaultActions,
    }


}($));