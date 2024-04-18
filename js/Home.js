

function hideCurrentMovie() {
  var currentmovie = document.getElementById("dangchieu");
  var upcoming = document.getElementById("sapchieu");
  var navdangchieu = document.getElementById("nav-dangchieu");
  var navsapchieu = document.getElementById("nav-sapchieu");
  var navspecial = document.getElementById("nav-special");
  var btnspecial = document.getElementById("btn");


  navdangchieu.style.display="none"; 
  currentmovie.style.display = "none";
  navspecial.style.display = "none";

  navsapchieu.style.display="block";
  navsapchieu.style.display="flex";
  upcoming.style.display = "block";
  btnspecial.style.display="block";

}

function hideUpcomingMovie() {
  var currentmovie = document.getElementById("dangchieu");
  var upcoming = document.getElementById("sapchieu");
  var navdangchieu = document.getElementById("nav-dangchieu");
  var navsapchieu = document.getElementById("nav-sapchieu");
  var navspecial = document.getElementById("nav-special");
  var btnspecial = document.getElementById("btn");


  currentmovie.style.display = "block";
  navsapchieu.style.display="none";
  navdangchieu.style.display="block";
  navspecial.style.display = "none";
  navdangchieu.style.display="flex";
  upcoming.style.display = "none";
  btnspecial.style.display="block";

}

function specialMovie(){
  var currentmovie = document.getElementById("dangchieu");
  var upcoming = document.getElementById("sapchieu");
  var navdangchieu = document.getElementById("nav-dangchieu");
  var navsapchieu = document.getElementById("nav-sapchieu");
  var navspecial = document.getElementById("nav-special");
  var btnspecial = document.getElementById("btn");


  currentmovie.style.display = "none";
  navsapchieu.style.display="none";
  upcoming.style.display = "none";
  navdangchieu.style.display="none";

  navspecial.style.display="block";
  navspecial.style.display="flex";
  btnspecial.style.display="none";
}




window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var headerhide = document.getElementById("headerhide");
  if (this.window.scrollY > 0) {
    header.classList.remove("active");
    header.classList.add("hidden");
    headerhide.classList.add("active");
    headerhide.classList.remove("hidden");
  } else {
    if (this.window.scrollY == 0) {
      header.classList.remove("hidden");
      header.classList.add("active");
      headerhide.classList.remove("active");
      headerhide.classList.add("hidden");
    }
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener();


let selectedElement = null;
function ClickColor (element) {
    if (selectedElement !== null) {
        selectedElement.classList.remove("clicked");
    }
    element.classList.add("clicked");
    selectedElement = element;
}





