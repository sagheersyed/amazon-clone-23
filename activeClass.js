$(document).ready(function () {
  $(".nav-search input").focus(function () {
    $(".nav-search").addClass("active");
  });
  $(".nav-search input").blur(function () {
    $(".nav-search").removeClass("active");
  });
});
