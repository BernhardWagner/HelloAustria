"use strict";

var bw = bw || {};


bw.idle = (function ($) {

    var idleTimeCount = 0, seconds, idleObjects, stage, hintMode;

    function setIdleHint(seconds_, stage_) {
        seconds = seconds_;
        stage = stage_;

        //Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 1000); // 1 second

        //Zero the idle timer on mouse movement.
        $(window).mousemove(function (e) {
            idleTimeCount = 0;
        });

        $(window).click(removeHints);

        $(window).keypress(function (e) {
            idleTimeCount = 0;
        });
    }


    function setStage(_stage) {
        stage = _stage;
    }


    function setIdleObjects(idleObjects_) {
        idleObjects = idleObjects_;
    }

    function timerIncrement() {
        if (!document.hidden) {
            idleTimeCount = idleTimeCount + 1;
            if (idleTimeCount > seconds) {
                if (!hintMode) {
                    idleAction();
                    hintMode = true;
                }
                idleTimeCount = 0;
            }
        }
    }

    function idleAction() {
        for (var idleObjKey in idleObjects) {
            if (idleObjects.hasOwnProperty(idleObjKey)) {
                var obj = idleObjects[idleObjKey],
                    newScaleX = obj.scaleX * 1.05,
                    newScaleY = obj.scaleY * 1.05;

                if (!obj.shadow) {
                    obj.shadow = new createjs.Shadow("#f6ff00", 0, 0, 0);
                }

                if(idleObjects[idleObjKey].currentLabel === 'static') {
                    createjs.Tween.get(obj.shadow, {override: true}).to({blur: 40}, 1000, createjs.Ease.backIn);
                    createjs.Tween.get(obj, {override: true}).to({
                        scaleX: newScaleX,
                        scaleY: newScaleY
                    }, 1000, createjs.Ease.backIn);
                }
            }
        }
    }

    function removeHints() {
        for (var idleObjKey in idleObjects) {
            if(idleObjects.hasOwnProperty(idleObjKey)){
                var obj = idleObjects[idleObjKey],
                    newScaleX = obj.scaleX / 1.05,
                    newScaleY = obj.scaleY / 1.05;


                if (hintMode && obj.shadow) {
                    createjs.Tween.get(obj.shadow, {override: true}).to({blur: 0}, 200, createjs.Ease.backIn);
                    createjs.Tween.get(obj, {override: true}).to({scaleX: newScaleX, scaleY: newScaleY}, 200, createjs.Ease.backIn);

                }
            }
        }

        hintMode = false;

        idleTimeCount = 0;
    }

    function removeHintsForce() {
        for (var idleObjKey in idleObjects) {
            if (idleObjects.hasOwnProperty(idleObjKey)) {
                var obj = idleObjects[idleObjKey];
                
                obj.shadow = null;
                obj.scaleX = 1;
                obj.scaleY = 1;
            }
        }
    }


    function addIdleObject(idleObject) {
        if(!idleObjects) {
            idleObjects = [];
        }
        idleObjects.push(idleObject);
    }

    return {
        registerIdleHints: setIdleHint,
        setIdleObjects: setIdleObjects,
        addIdleObject: addIdleObject,
        setStage: setStage,
        removeHints: removeHintsForce,
    }

}($));
