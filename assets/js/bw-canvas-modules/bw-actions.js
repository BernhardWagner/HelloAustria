"use strict";

var bw = bw || {};


bw.action = (function ($) {

    var defaultActionObjects, hoverTimeout = 500, hoverOk;

    function registerAnimationDefaultActions(actionObjects_) {
        defaultActionObjects = actionObjects_;
        hoverOk = true;

        for(var acionObjKey in defaultActionObjects) {
            if(defaultActionObjects.hasOwnProperty(acionObjKey)) {
                var obj = defaultActionObjects[acionObjKey];
                obj.cursor = "pointer";
                obj.autoReset = false;

                obj.addEventListener("mouseover", function (e) {
                    if (hoverOk && e.currentTarget.currentLabel === 'static') {
                        e.currentTarget.gotoAndPlay('hover');
                        hoverOk = false;

                        setTimeout(function () {
                            hoverOk = true;
                        }, hoverTimeout);
                    }
                });

                obj.addEventListener("click", clickAction);
            }
        }
    }

    function clickAction(e) {
        if (e.currentTarget.actionSound) {
            e.currentTarget.actionSound.volume = 0.5;
            e.currentTarget.actionSound.stop();
            e.currentTarget.actionSound.play();
        }
        e.currentTarget.gotoAndPlay('action');
    }

    function unregisterAnimationDefaultActions() {
        for(var acionObjKey in defaultActionObjects) {
            if(defaultActionObjects.hasOwnProperty(acionObjKey)){
                var obj = defaultActionObjects[acionObjKey];
                obj.removeAllEventListeners("mouseover");
                obj.removeEventListener("click", clickAction);
            }
        }
    }


    function addActionSound(object, soundID) {
        object.actionSound = createjs.Sound.createInstance(soundID);
    }


    return {
        registerAnimationDefaultActions: registerAnimationDefaultActions,
        unregisterAnimationDefaultActions: unregisterAnimationDefaultActions,
        addActionSound: addActionSound,
    }


}($));