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



const buttonLogin = document.getElementById('button-login');
const width = window.innerWidth;

buttonLogin.addEventListener('mouseover',()=>{
    var listLogin = document.getElementById('list-login');
    if(width>600){
        listLogin.classList.remove('d-none');
    }

})

buttonLogin.addEventListener('mouseout',()=>{
    var listLogin = document.getElementById('list-login');
        if(width>600){
            listLogin.classList.add('d-none');
        }
})

buttonLogin.addEventListener('click',()=>{
    if(width <=600){
        var listLogin = document.getElementById('list-login');
        if(listLogin.classList.contains('d-none')){
            listLogin.classList.remove('d-none');
        }else {
            listLogin.classList.add('d-none');
        }
    }
})

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

