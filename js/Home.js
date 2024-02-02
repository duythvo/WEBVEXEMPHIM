function hideCurrentMovie(){
    var currentmovie = document.getElementById('dangchieu');
    var upcoming = document.getElementById('sapchieu');

    currentmovie.style.display = 'none';
    upcoming.style.display = 'block';
}

function hideUpcomingMovie(){
    var currentmovie = document.getElementById('dangchieu');
    var upcoming = document.getElementById('sapchieu');

    currentmovie.style.display = 'block';
    upcoming.style.display = 'none';
}


window.addEventListener('scroll',function(){
    var header = document.getElementById('header');
    var headerhide = document.getElementById('headerhide');
    if(this.window.scrollY > 0){
        header.classList.remove('active');
        header.classList.add('hidden');
        headerhide.classList.add('active');
        headerhide.classList.remove('hidden');

    }else{
        if(this.window.scrollY == 0){
            header.classList.remove('hidden');
            header.classList.add('active');
            headerhide.classList.remove('active');
            headerhide.classList.add('hidden');
        }
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

window.addEventListener()
