"use strict";

var bw = bw || {};


bw.helpingFunc = (function ($, images) {

    function checkCollision(mc1, mc2) {
        var m1x, m1y, m1w, m1h, m2x, m2y, m2w, m2h;

        m1x = mc1.x;
        m1y = mc1.y;
        m1w = mc1.nominalBounds.width;
        m1h = mc1.nominalBounds.height;

        m2x = mc2.x;
        m2y = mc2.y;
        m2w = mc2.nominalBounds.width;
        m2h = mc2.nominalBounds.height;

        if (m1x >= m2x + m2w
            || m1x + m1w <= m2x
            || m1y >= m2y + m2h
            || m1y + m1h <= m2y) {
            return false;
        } else {
            return true;
        }
    }


    return {
        checkCollision: checkCollision
    }

}($));