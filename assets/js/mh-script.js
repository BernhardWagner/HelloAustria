$( document ).ready(function() {

  var $hamburger = $(".hamburger");
  var $menuitem = $("#menuitem");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      $menuitem.toggleClass("seemenu");
    });






   $( "button.info" ).click(function() {
      $( "div.infobox" ).toggleClass( "hiddeninfobox" );
   });

});
