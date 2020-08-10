$(document).on("click", ".link", function (event) {
  let destinationName = event.target.innerHTML;
  let destination = document.getElementById(destinationName);
  let origin = document.querySelector(".active");
  let menu = $("#top-menu");

  if (origin.id === "home") {
    menu.fadeIn(800);
  } else if (destinationName === "home") {
    menu.fadeOut(800);
  }

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

  let link = $("#top-menu span");

  for (let i = 0; i < link.length; i++) {
    link[i].innerHTML === destinationName
      ? (link[i].style.borderBottom = "solid 1px #fff")
      : (link[i].style.borderBottom = "solid 1px transparent");
    console.log(link[i].innerHTML);
  }
});
