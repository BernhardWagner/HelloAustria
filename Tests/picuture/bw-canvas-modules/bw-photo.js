"use strict";

var bw = bw || {};


bw.photo = (function ($) {

    var triggerElement, pictureObject, pictureSound, closeButton, active, closeButtonInitScale;

    /* TODO only one picture interaction per place? */
    function registerPictureInteraction(triggerElement_, pictureObject_, sound_, closeButton_) {
        triggerElement = triggerElement_;
        pictureObject = pictureObject_;
        setPictureSound(sound_);
        closeButton = closeButton_;
        closeButton.cursor = "pointer";
        triggerElement.cursor = "pointer";
        active = false;

        closeButtonInitScale = {
            x: closeButton.scaleX,
            y: closeButton.scaleY
        };

        triggerElement.addEventListener('click', makeAPhoto);
        closeButton.addEventListener('click', closeImage);
        closeButton.addEventListener('mouseover', hoverCloseButton);
        closeButton.addEventListener('mouseout', nohoverCloseButton);

    }

    function unregisterPictureIntearction() {
        triggerElement.removeEventListener('click', makeAPhoto);
        closeButton.removeEventListener('click', closeImage);
        closeButton.removeEventListener('mouseover', hoverCloseButton);
        closeButton.removeEventListener('mouseout', nohoverCloseButton);

        pictureSound = null;
        triggerElement = null;
        pictureObject = null;
        pictureSound = null;
        active = false;
        closeButton = null;
    }


    function makeAPhoto() {
        if(!active) {
            active = true;

            if(pictureSound){
                pictureSound.play();
            }

            pictureObject.gotoAndPlay('in');
        }
    }

    function closeImage() {
        pictureObject.gotoAndPlay('out');
        active = false;
    }

    function setPictureSound(sound_) {
        if(sound_){
            if(typeof sound_ === 'object'){
                pictureSound = sound_;
            }

            else if(typeof sound_ === 'string') {
                pictureSound = createjs.Sound.createInstance(sound_);
            }
        }
    }

    function hoverCloseButton() {
        var newScaleX = closeButtonInitScale.x + 0.1,
            newScaleY = closeButtonInitScale.y + 0.1;

        createjs.Tween.get(closeButton, {override: true}).to({scaleX: newScaleX, scaleY: newScaleY}, 200, createjs.Ease.cubicIn);
    }

    function nohoverCloseButton() {
        var newScaleX = closeButtonInitScale.x,
            newScaleY = closeButtonInitScale.y;

        createjs.Tween.get(closeButton, {override: true}).to({scaleX: newScaleX, scaleY: newScaleY}, 200, createjs.Ease.cubicIn);
    }


    return {
        registerPictureInteraction: registerPictureInteraction,
        unregisterPictureIntearction: unregisterPictureIntearction
    }


}($));
