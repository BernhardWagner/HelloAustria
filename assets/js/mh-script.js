$(document).ready(function() {
  $("#menucross").hide();
  $("#menuitem").hide();
  $("#menubutton").click(function() {
    $("#menuitem").slideToggle("slow", function() {
      $("#menubutton").hide();
      $("#menucross").show();
    });
  });

  $("#menucross").click(function() {
    $("#menuitem").slideToggle("slow", function() {
      $("#menucross").hide();
      $("#menubutton").show();
    });
  });
});
