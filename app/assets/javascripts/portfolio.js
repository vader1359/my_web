// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("turbolinks:load", function() {
  if ($(".project-title").text() == "PROJECTS: CUISINIANSHOWCASE" ) {
    $(".previous").hide();
  }
  if ($(".project-title").text() == "PROJECTS: OTHERSSHOWCASE" ) {
    $(".next").hide();
  }
});