"use strict";

var bw = bw || {};


bw.scene1 = (function ($, images) {

    var canvas,
        stage,
        exportRoot,
        i = 0,
        baloon,
        baloons,
        collisionObject;

    function init(canv, stag, exp) {
        canvas = canv;
        stage = stag;
        exportRoot = exp;


        baloons = [];

        stage.addChild(exportRoot);
        exportRoot.scene1.removeChild(exportRoot.scene1.baloon);
        exportRoot.scene1.removeChild(exportRoot.scene1.coll);


        collisionObject = new lib.CollisionObject();

        collisionObject.x = 500;
        collisionObject.y = 500;

        stage.addChild(collisionObject);

        stage.update();
    }


    function unloadScene() {
        baloons = [];
        stage.removeAllChildren();
        stage.addChild(exportRoot);                         //TODO alles von scene 1 auch in scene 1 geben
    }


    function interactions() {
        if ((Math.random() * 10 > 9.9 && baloons.length < 5) || baloons.length < 1) {
            baloon = new lib.Baloon();

            baloon.scaleX = baloon.scaleY = Math.random() * 0.8 + 0.3;

            baloon.x = 1800;
            baloon.y = Math.random() * 960;

            baloon.velX = (1 + baloon.scaleX) * -10;
            baloon.velY = -2;

            baloon.onClick = handleBaloonClick;

            baloons.push(baloon);
            stage.addChild(baloon);

        }

        for (i = baloons.length - 1; i >= 0; i--) {
            baloon = baloons[i];

            baloon.x += baloon.velX;
            baloon.y += baloon.velY;

            if (baloon.x > 1800 || baloon.x < 0 || baloon.y > 960 || baloon.y < 0) {
                baloons.splice(i, 1);
                stage.removeChild(baloon);
            }

            if (bw.helpingFunc.checkCollision(baloon, collisionObject)) {
                handleBaloonClick(baloon);
            }

            if (baloon.clicked) {
                baloon.alpha -= 0.05;
            }

        }
    }

    function handleBaloonClick(obj) {
        var baloon = this;

        if (!baloon) {
            baloon = obj;
        }

        baloon.gotoAndPlay("pop");
        baloon.velX = 1;
        baloon.velY = (1 + baloon.scaleX) * -10;
        baloon.clicked = true;
    }



    return {
        load: init,
        unload: unloadScene,
        interactions: interactions
    }

}($));