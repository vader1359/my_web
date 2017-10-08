// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require pace/pace
//= require_tree .



document.addEventListener("turbolinks:load", function() {
  if ($(window).width() < 768) {
    $(".nav-right").hide();
    $(".nav-toggle").on("click", function() {
      if ($(".nav-toggle").hasClass("is-red")) {
        $(".nav-toggle").removeClass("is-red");
        $(".nav-right").hide();
      } else {
        $(".nav-toggle").addClass("is-red");
        $(".nav-right").show();
      }
    })
  } else {
    $(".nav-right").show();
  }
  

  if (window.location.pathname == "/resume/index") {
    $($(".nav-right").children()[0]).css("color","#FA705A");
  }
  if (window.location.pathname.includes("portfolio")) {
    $($(".nav-right").children()[1]).css("color","#FA705A");
  }
  
  
});