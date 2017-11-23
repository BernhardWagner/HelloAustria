"use strict";

var mh = mh || {};

mh.main = (function () {

  function init() {
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
      $(".icon").on("click", function() {
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

  }

    $( document ).ready(init);



}($));