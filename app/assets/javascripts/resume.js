// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("turbolinks:load", function() {
  $("img").hide();
  $("a").hide();
  $("img").fadeIn(1000);
  $("a").fadeIn(1200);
});