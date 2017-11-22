$( document ).ready(function() {


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

   $(".icon").on("click", function() {
			$(".box").toggleClass("fullScreen");
		});

});
