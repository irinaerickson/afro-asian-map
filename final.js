/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
$().ready(function myFunction()) {
  var x = document.getElementsByClassName("top-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}