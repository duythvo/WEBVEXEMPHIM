//js hoi dap
function toggleAnswer(element) {
  var answer = element.nextElementSibling;
  var allAnswers = document.querySelectorAll(".answer");
  var allAsks = document.querySelectorAll(".ask");

  // Mở hoặc đóng câu trả lời của câu hỏi được click
  if (answer.classList.contains("active")) {
    answer.style.maxHeight = 0;
    answer.classList.remove("active");
    element.classList.remove("open");
  } else {
    // Đóng tất cả các câu trả lời và đặt tất cả các câu hỏi về trạng thái đóng
    allAnswers.forEach(function (ans) {
      ans.style.maxHeight = 0;
      ans.classList.remove("active");
    });

    allAsks.forEach(function (ask) {
      ask.classList.remove("open");
    });

    // Mở câu trả lời của câu hỏi được click
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.classList.add("active");
    element.classList.add("open");
  }

  // Cuộn tới câu hỏi được click
  var offsetTop = element.offsetTop;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
  // Cuộn tới cuối câu trả lời
  var offsetBottom = element.offsetBottom;
  window.scrollTo({ bottom: offsetBottom, behavior: "smooth" });
}

// js phim dang chieu

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    658: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
});
