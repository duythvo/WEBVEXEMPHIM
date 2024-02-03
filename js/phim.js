let selectedElement = null;
function ClickColor(element) {
  if (selectedElement !== null) {
    selectedElement.classList.remove("clicked");
  }
  element.classList.add("clicked");
  selectedElement = element;
}

document.addEventListener("DOMContentLoaded", function () {
  var vanBan = document.querySelectorAll(".limitedText");

  vanBan.forEach(function (vanBan) {
    var mangTu = vanBan.innerText.split(/\s+/);
    var gioiHanTu = mangTu.slice(0, 48).join(" "); //lấy 48 từ đầu tiên
    vanBan.innerText = gioiHanTu;
  });
});
