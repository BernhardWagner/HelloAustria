"use strict";

var mh = mh || {};

mh.main = (function () {

  var icons, boxes, closeButton, closeButtonWrapper, infoButton, mapWrapper;

  function init() {
    icons = $('.icon');
    boxes = $('.box');
    closeButtonWrapper = $('#close-button-wrapper');
    closeButton = closeButtonWrapper.find("#close-canvas");
    infoButton = $('#info').find('.info');
    mapWrapper = $('#map-wrap');


      /*Hamburger Menu to arrow + toggle menuitem */
      var $hamburger = $(".hamburger");
      var $menuitem = $("#menuitem");
      $hamburger.on("click", function(e) {
          $hamburger.toggleClass("is-active");
          $menuitem.toggleClass("seemenu");
      });

      /*open canvas*/
      icons.on("click", function(e) {
          var currentBox = $('#' + e.currentTarget.alt),
              currentCanvas,
              boundingRect;

          currentCanvas = currentBox.find('canvas')[0];

          infoButton.addClass('fade-fx');
          icons.addClass('fade-fx');

          //console.log('#' + e.currentTarget.alt);
          currentBox.addClass("fullScreen");
          $(".mapAsBg").addClass("gray");

          mapWrapper.addClass('open-canvas');

          setTimeout(function () {
              closeButton.addClass("closecanvas");
              boundingRect = currentCanvas.getBoundingClientRect();
              closeButtonWrapper.addClass('open');
              closeButtonWrapper.css({
                  'left': (boundingRect.right - 61) + 'px',
                  'top': (boundingRect.top) + 'px'
              });
              infoButton.css({
                  'left': (boundingRect.right - 90) + 'px',
                  'top' : (boundingRect.bottom - 90) + 'px'
              });

              infoButton.removeClass('fade-fx');
          }, 650);
      });

      /*close canvas*/
      closeButton.on("click", closeCanvas);

      //register Tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // $(".icon").on("click", function() {
      //   $(".closecanvas").hide();
      // });
  }

   function closeCanvas() {
       icons.removeClass('fade-fx');
       mapWrapper.removeClass('open-canvas');
       closeButtonWrapper.removeClass('open');
        boxes.removeClass("fullScreen");
        $(".mapAsBg").removeClass("gray");
        $(".close").removeClass("closecanvas");
       infoButton.addClass('fade-fx');

       setTimeout(function () {
           infoButton.css({
               'left': '',
               'top' : ''
           });
           infoButton.removeClass('fade-fx');
       }, 500)
    }

    $( document ).ready(init);

  return {
      closeCanvas: closeCanvas
  }



}($));