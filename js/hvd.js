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

function submitForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var content = document.getElementById("contents").value;

  var regexPhone = /^\d{10}$/; 
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (name === "") {
    alert("Vui lòng điền thông tin Họ tên.");
    return; 
  }else if (phone === "") {
    alert("Vui lòng điền thông tin Điện Thoại.");
    return; 
  }else if (!regexPhone.test(phone)) {
      alert("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
      return; 
  }else if (email === "") {
    alert("Vui lòng điền thông tin Email.");
    return; 
  }else if (!regexEmail.test(email)) {
      alert("Email không hợp lệ. Vui lòng nhập lại.");
      return; 
  }else if (content === "") {
    alert("Vui lòng điền thông tin Nội dung.");
    return; 
}

}
