function openNav() {
    document.getElementById("menuitem").style.width = "150px";
}

function closeNav() {
    document.getElementById("menuitem").style.width = "0";
}



$( document ).ready(function() {

  $( "#menucross" ).hide();

  $( "#menubutton" ).click(function() {
    $( "#menubutton" ).hide();
    $( "#menucross" ).show();
  });

  $( "#menucross" ).click(function() {
    $( "#menucross" ).hide();
    $( "#menubutton" ).show();
  });

  $( ".info" ).click(function() {
    console.log("jhkadhjk");
     $( "div.infobox" ).toggleClass( "hiddeninfobox" );
  });



});
