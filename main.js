AOS.init();



$( "#item1" ).hover(
  function() {
    $("#description-1").addClass( "hide" );
  }, function() {
    $("#description-1").removeClass( "hide" );
  }
);


$( "#item2" ).hover(
  function() {
    $("#description-2").addClass( "hide" );
  }, function() {
    $("#description-2").removeClass( "hide" );
  }
);


$( "#item3" ).hover(
  function() {
    $("#description-3").addClass( "hide" );
  }, function() {
    $("#description-3").removeClass( "hide" );
  }
);




$( "#item4" ).hover(
  function() {
    $("#description-4").addClass( "hide" );
  }, function() {
    $("#description-4").removeClass( "hide" );
  }
);


$("#fb-icon").click(
  function () {
     //TODO: Link to FB page
  }
);

$("#contact-button").click(
  function () {
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let message = $("#message").val();
    console.log(message);
  }
);