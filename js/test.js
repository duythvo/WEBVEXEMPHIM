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

const swiper = new Swiper(".swiper1", {
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

    pagination: {
      el: '.swiper1-pagination',
    },
  });

const upcoming = new Swiper(".swiper-upcoming", {
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
      nextEl: ".swiper-upcoming-button-next",
      prevEl: ".swiper-upcoming-button-prev",
    },

    pagination: {
      el: '.swiper-upcoming-pagination',
    },

  });

window.addEventListener('resize',function(){
  if(this.window.innerWidth <=1400 && this.window.innerWidth >=1000){
      swiper.params.slidesPerView = 3;
      upcoming.params.slidesPerView = 3;
  }else{
      if(this.window.innerWidth >=800 && this.window.innerWidth<1000){
        swiper.params.slidesPerView = 2;
        upcoming.params.slidesPerView = 2;
      }else{
        swiper.params.slidesPerView = 5;
        upcoming.params.slidesPerView = 5;
      }
  }
  swiper.update()
})