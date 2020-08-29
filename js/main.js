// TOP BAR NAVIGATION
$(document).on("click", ".link", function (event) {
  let destinationName = event.target.innerHTML;
  let destination = document.getElementById(destinationName);
  let origin = document.querySelector(".active");
  let menu = $("#top-menu");
  let link = $("#top-menu span");

  if (origin.id === "home") {
    menu.fadeIn(800);
  } else if (destinationName === "home") {
    menu.fadeOut(800);
  }

  pageAnimation(origin, destination);

  for (let i = 0; i < link.length; i++) {
    link[i].innerHTML === destinationName
      ? (link[i].style.borderBottom = "solid 1px #fff")
      : (link[i].style.borderBottom = "solid 1px transparent");
  }
});

// NAVBAR BACKGROUND ON SCROLL
$(window).on("scroll", function () {
  $(window).scrollTop() > 70
    ? $("#top-menu .bg").css("background", "rgba(0, 0, 0, .8)")
    : $("#top-menu .bg").css("background", "transparent");
});

// WORK TO PROJECT NAVIGATION
$(document).on("click", ".box", function (event) {
  let origin = document.querySelector(".active");
  let selected = event.target.id.slice(2);
  let destination = document.getElementById(selected);
  let link = $("#top-menu span");

  pageAnimation(origin, destination);

  link[1].style.borderBottom = "1px solid transparent";
});

// FUNCTIONS

function pageAnimation(origin, destination) {
  origin.classList.remove("active");
  destination.classList.add("active");

  origin.classList.add("animation-page-hide");
  setTimeout(() => {
    origin.style.display = "none";
    origin.classList.remove("animation-page-hide");
    destination.classList.add("animation-page-show");
    destination.style.display = "block";
  }, 1000);

  setTimeout(() => {
    destination.classList.remove("animation-page-show");
  }, 2000);
}
