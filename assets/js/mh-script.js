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

/*open canvas*/
  $(".icon").on("click", function() {
		$(".box").addClass("fullScreen");
    $("#content").addClass("gray");
    $(".close").addClass("closecanvas");
  });

/*close canvas*/
  $(".close").on("click", function() {
    $(".box").removeClass("fullScreen");
    $("#content").removeClass("gray");
    $(".close").removeClass("closecanvas");
  });

  // $(".icon").on("click", function() {
  //   $(".closecanvas").hide();
  // });

});
