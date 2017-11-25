"use strict";

var bw = bw || {};


bw.action = (function ($) {

    var defaultActionObjects, hoverTimeout = 400, hoverOk;

    function registerAnimationDefaultActions(actionObjects_) {
        defaultActionObjects = actionObjects_;
        hoverOk = true;

        for(var acionObjKey in defaultActionObjects) {
            var obj = defaultActionObjects[acionObjKey];
            obj.cursor = "pointer";

            obj.addEventListener("mouseover", function (e) {
                if(hoverOk){
                    e.currentTarget.gotoAndPlay('hover');
                    hoverOk = false;

                    setTimeout(function () {
                        hoverOk = true;
                    }, hoverTimeout);
                }
            });

            obj.addEventListener("click", function (e) {
                if(e.currentTarget.actionSound) {
                    e.currentTarget.actionSound.stop();
                    e.currentTarget.actionSound.play();
                }
                e.currentTarget.gotoAndPlay('action');
            });
        }
    }

    function unregisterAnimationDefaultActions() {
        for(var acionObjKey in defaultActionObjects) {
            var obj = defaultActionObjects[acionObjKey];
            obj.removeEventListener("mouseover");
            obj.removeEventListener("click");
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