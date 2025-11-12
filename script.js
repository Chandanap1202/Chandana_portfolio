// Wait until the page is fully loaded
$(document).ready(function(){

  // When the contact form is submitted
  $("#contactForm").on("submit", function(event){
    event.preventDefault(); // prevent page reload

    // Get name value from input
    const name = $("#name").val();

    // Display thank-you message
    $("#result").html(`Thank you, <strong>${name}</strong>! Your message has been recorded successfully.`).show();

    // Clear the form inputs
    $(this)[0].reset();
  });

});
