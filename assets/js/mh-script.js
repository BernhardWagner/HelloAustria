"use strict";

var mh = mh || {};

mh.main = (function () {

  var content, navigation, icons, places, map;

  function init() {
    content = $('#content');
    navigation = $('#navigation');
    icons = $('.icon');
    places = $('.place');
    map = $('.map');


      /*Hamburger Menu to arrow + toggle menuitem */
      var $hamburger = $(".hamburger");
      var $menuitem = $("#menuitem");
      $hamburger.on("click", function(e) {
          $hamburger.toggleClass("is-active");
          $menuitem.toggleClass("seemenu");
      });


      /*toggle infobox*/
      $( "button.info" ).click(function() {
          $( "div.infobox" ).toggleClass( "hiddeninfobox" );
      });

      /*open canvas*/
      icons.on("click", function() {
          $(".box").addClass("fullScreen");
          $(".mapAsBg").addClass("gray");
          $(".close").addClass("closecanvas");
      });

      /*close canvas*/
      $(".close").on("click", function() {
          $(".box").removeClass("fullScreen");
          $(".mapAsBg").removeClass("gray");
          $(".close").removeClass("closecanvas");
      });

      // $(".icon").on("click", function() {
      //   $(".closecanvas").hide();
      // });


      /* sets the init pos of the css*/
      /* sehr inperformant aber keine Ahnung wies sonst gehen sollt */
      places.each(function (key, value) {
          value.initPosY = parseInt($(value).css('top'));
          value.initPosX = parseInt($(value).css('left'));
      });

          setTimeout(function () {
          $(window).trigger("resize");
      });


      $(window).on("resize", function (e) {
        var mapBackgroundSize, topValue, leftValue, ratioX, ratioY;

          content.height(window.innerHeight - navigation.outerHeight());

          /*--to get the icons sticky--*/
          setTimeout(function () {
              mapBackgroundSize = getBackgroundSize(map[0]);


              ratioX = mapBackgroundSize.width/3264;
              ratioY =  mapBackgroundSize.height/1824;

              places.each(function (key, value) {
                  topValue = (((mapBackgroundSize.height - content.height()) / 2) * -1 + value.initPosY * ratioY);
                  leftValue =(((mapBackgroundSize.width - content.width()) / 2) *-1 + value.initPosX * ratioX);

                  console.log(content.width());


                  $(value).css('top', topValue + 'px');
                  $(value).css('left', leftValue + 'px');
              });
          }, 200);
      });

      content.height(window.innerHeight - navigation.outerHeight());


  }


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
        if(cssSize[0] === 'cover') {
            if(elemDim[0] > elemDim[1]) {
                if(elemDim[0] / elemDim[1] >= ratio) {
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
        } else if(cssSize[0] === 'contain') {
            if(elemDim[0] < elemDim[1]) {
                computedDim[0] = elemDim[0];
                computedDim[1] = 'auto';
            } else {
                if(elemDim[0] / elemDim[1] >= ratio) {
                    computedDim[0] = 'auto';
                    computedDim[1] = elemDim[1];
                } else {
                    computedDim[1] = 'auto';
                    computedDim[0] = elemDim[0];
                }
            }
        } else {
            for(var i = cssSize.length; i--;) {
                if (cssSize[i].indexOf('px') > -1) {
                    computedDim[i] = cssSize[i].replace('px', '');
                } else if (cssSize[i].indexOf('%') > -1) {
                    computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
                }
            }
        }
        if(computedDim[0] === 'auto' && computedDim[1] === 'auto') {
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
    }

    $( document ).ready(init);



}($));