"use strict";
var bw = bw || {};


bw.resizeMap = (function ($) {
    var menuItem, content, navigation, places, mapWrapper, map, mapImage;

    function iconPosiontioningAndResize() {
        menuItem = $('#menuitem');
        places = $('.place');
        content = $('#content');
        mapWrapper = $('#map-wrap');
        navigation = $('#navigation');
        map = $('#map');
        mapImage = $('#map-image');


        setTimeout(function () {
            $(window).trigger("resize");
        }, 200);


        $(window).on("resize", function (e) {
            var mapBackgroundSize, topValue, leftValue, ratioX, ratioY;

            content.height(window.innerHeight); // - navigation.outerHeight()
            menuItem.outerHeight(content.height());

            if (content.width() / content.height() < 3264 / 1824) {
                map.css({
                    height: '100%',
                    width: ''
                });

                mapImage.css({
                    height: '100%',
                    width: ''
                });

            } else {
                map.css({
                    height: '',
                    width: '100%'
                });

                mapImage.css({
                    height: '',
                    width: '100%'
                });
            }


            /*--to get the icons sticky--*/
            /*
            mapBackgroundSize = getBackgroundSize(map[0]);


            ratioX = mapBackgroundSize.width / 3264;
            ratioY = mapBackgroundSize.height / 1824;

            places.each(function (key, value) {
                topValue = (((mapBackgroundSize.height - content.height()) / 2) * -1 + value.initPosY * ratioY);
                leftValue = (((mapBackgroundSize.width - content.width()) / 2) * -1 + value.initPosX * ratioX);

                $(value).css('top', topValue + 'px');
                $(value).css('left', leftValue + 'px');


                $(value).next().css({
                    'top': topValue + $(value).height() / 2,
                    'left': leftValue + $(value).width() / 2
                });
            });*/
        });

        content.height(window.innerHeight - navigation.outerHeight());
        menuItem.outerHeight(content.height());
    }


/*
    function getBackgroundSize(elem) {
        var computedStyle = getComputedStyle(elem),
            image = new Image(),
            src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2'),
            cssSize = computedStyle.backgroundSize,
            elemW = parseInt(computedStyle.width.replace('px', ''), 10),
            elemH = parseInt(computedStyle.height.replace('px', ''), 10),
            elemDim = [elemW, elemH],
            computedDim = [],
            ratio;
        image.src = src;
        ratio = image.width > image.height ? image.width / image.height : image.height / image.width;
        cssSize = cssSize.split(' ');
        computedDim[0] = cssSize[0];
        computedDim[1] = cssSize.length > 1 ? cssSize[1] : 'auto';
        if (cssSize[0] === 'cover') {
            if (elemDim[0] > elemDim[1]) {
                if (elemDim[0] / elemDim[1] >= ratio) {
                    computedDim[0] = elemDim[0];
                    computedDim[1] = 'auto';
                } else {
                    computedDim[0] = 'auto';
                    computedDim[1] = elemDim[1];
                }
            } else {
                computedDim[0] = 'auto';
                computedDim[1] = elemDim[1];
            }
        } else if (cssSize[0] === 'contain') {
            if (elemDim[0] < elemDim[1]) {
                computedDim[0] = elemDim[0];
                computedDim[1] = 'auto';
            } else {
                if (elemDim[0] / elemDim[1] >= ratio) {
                    computedDim[0] = 'auto';
                    computedDim[1] = elemDim[1];
                } else {
                    computedDim[1] = 'auto';
                    computedDim[0] = elemDim[0];
                }
            }
        } else {
            for (var i = cssSize.length; i--;) {
                if (cssSize[i].indexOf('px') > -1) {
                    computedDim[i] = cssSize[i].replace('px', '');
                } else if (cssSize[i].indexOf('%') > -1) {
                    computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
                }
            }
        }
        if (computedDim[0] === 'auto' && computedDim[1] === 'auto') {
            computedDim[0] = image.width;
            computedDim[1] = image.height;
        } else {
            ratio = computedDim[0] === 'auto' ? image.height / computedDim[1] : image.width / computedDim[0];
            computedDim[0] = computedDim[0] === 'auto' ? image.width / ratio : computedDim[0];
            computedDim[1] = computedDim[1] === 'auto' ? image.height / ratio : computedDim[1];
        }
        return {
            width: computedDim[0],
            height: computedDim[1]
        };
    }*/


    return {
        iconPosiontioningAndResize: iconPosiontioningAndResize,
    }


}($));