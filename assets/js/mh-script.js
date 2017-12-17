"use strict";

var mh = mh || {};

mh.main = (function () {

  var icons, boxes;

  function init() {
    icons = $('.icon');
    boxes = $('.box');


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
      icons.on("click", function(e) {
          console.log('#' + e.currentTarget.alt);
          $('#' + e.currentTarget.alt).addClass("fullScreen");
          $(".mapAsBg").addClass("gray");
          $(".close").addClass("closecanvas");
      });

      /*close canvas*/
      $(".close").on("click", function() {
          boxes.removeClass("fullScreen");
          $(".mapAsBg").removeClass("gray");
          $(".close").removeClass("closecanvas");
      });

      //register Popover
      $('[data-toggle="popover"]').popover();

      // $(".icon").on("click", function() {
      //   $(".closecanvas").hide();
      // });
  }

    $( document ).ready(init);



}($));