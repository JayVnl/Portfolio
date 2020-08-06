// NAVIGATION REDIRECTS

$(document).on("click", ".to-home", function (element) {
  $("#work").hide();
  $("#about").hide();
  $("#top-menu").hide();
  $("#home").show();
});

$(document).on("click", ".to-work", function (element) {
  $("#home").hide();
  $("#about").hide();
  $("#top-menu").show();
  $("#work").show();
});

$(document).on("click", ".to-about", function (element) {
  $("#home").hide();
  $("#work").hide();
  $("#top-menu").show();
  $("#about").show();
});
