$(document).ready(function() {
  $("#headingOne").click(function() {
    $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
  });
});