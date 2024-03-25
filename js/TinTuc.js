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

function resizeDivs() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 760) {
    document.getElementById("dienanh").classList.add("small-screen");
    document.getElementById("tuyendung").classList.add("small-screen");
    document.querySelectorAll(".small-screen a").forEach(function (element) {
      element.classList.add("small-link");
    });
  } else {
    document.getElementById("dienanh").classList.remove("small-screen");
    document.getElementById("tuyendung").classList.remove("small-screen");
    document.querySelectorAll(".small-screen a").forEach(function (element) {
      element.classList.remove("small-link");
    });
  }
}

// Gọi hàm khi trang được tải và khi cửa sổ thay đổi kích thước
window.onload = resizeDivs;
window.addEventListener("resize", resizeDivs);

const buttonLogin = document.getElementById("button-login");
const width = window.innerWidth;

buttonLogin.addEventListener("mouseover", () => {
  var listLogin = document.getElementById("list-login");
  if (width > 600) {
    listLogin.classList.remove("d-none");
  }
});

buttonLogin.addEventListener("mouseout", () => {
  var listLogin = document.getElementById("list-login");
  if (width > 600) {
    listLogin.classList.add("d-none");
  }
});

buttonLogin.addEventListener("click", () => {
  if (width <= 600) {
    var listLogin = document.getElementById("list-login");
    if (listLogin.classList.contains("d-none")) {
      listLogin.classList.remove("d-none");
    } else {
      listLogin.classList.add("d-none");
    }
  }
});




