$(document).ready(function() {
  console.log ("Jquery is working");



  $("#submit").click(function(event) {
    event.preventDefault();
    console.log ("Click Event is working");
    var height = parseInt($("#height").val());
    console.log("The height " + height + " inches.");
    if (height >= 33 && height <= 48) {
      $(".adultrow").hide();
      $(".middlerow").hide();
    }

    else if (height>= 49 && height<=60 ) {
      $(".adultrow").hide();
      $(".kidrow").hide();
    }

    else if (height>= 61 && height<=84 ) {
      $(".kidrow").hide();
      return
    }

    else {
      $(".kidrow").hide();
      $(".middlerow").hide();
      $(".adultrow").hide();
      $(".elserow").show();
    }

  });






});
