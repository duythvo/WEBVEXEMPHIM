function hidedienanh() {
  var a = document.getElementById("dienanh");
  var b = document.getElementById("tuyendung");
  a.style.display = "none";
  b.style.display = "block";
}
function hidetuyendung() {
  var a = document.getElementById("dienanh");
  var b = document.getElementById("tuyendung");
  a.style.display = "block";
  b.style.display = "none";
}

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
