// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname == "/contact") {
    $(".portfolio").css("background-color", "rgba(1,1,1,0)");
    $(".portfolio").css("box-shadow", "none");
  }
  
});