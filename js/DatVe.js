$(document).ready(function () {
  var listTenGhe = [];
  let GiaGhe = 0;
  let combo = 0;
  $(".ghe").click(function () {
    var cacGheChon = $("#tenghe");
    var tienCacGheChon = $("#tienghe");
    var tenGhe = $(this).attr("data-soGhe");
    var giaGhe = parseInt($(this).attr("data-giaTien"));
    let nowSRC = $(this).attr("src");
    if (nowSRC == "../image/GheDonChuaChon.svg") {
      let newSRC = "../image/GheDonDangChon.svg";
      $(this).attr("src", newSRC);
      listTenGhe.push(tenGhe);
      GiaGhe = GiaGhe + giaGhe;
    } else if (nowSRC == "../image/GheDonDangChon.svg") {
      let newSRC = "../image/GheDonChuaChon.svg";
      let viTri = listTenGhe.indexOf(tenGhe);
      $(this).attr("src", newSRC);
      listTenGhe.splice(viTri, 1);
      GiaGhe = GiaGhe - giaGhe;
    } else if (nowSRC == "../image/GheDonDaChon.svg") {
      return;
    }
    cacGheChon.html("Ghế :" + listTenGhe.join(", "));
    tienCacGheChon.html(GiaGhe + "   đ");
    let tong = GiaGhe + combo;
    $("#total").html(tong + "   đ");
  });
  $(".ghedoi").click(function () {
    var cacGheChon = $("#tenghe");
    var tienCacGheChon = $("#tienghe");
    var tenGhe = $(this).attr("data-soGhe");
    var giaGhe = parseInt($(this).attr("data-giaTien"));
    let nowSRC = $(this).attr("src");
    if (nowSRC == "../image/GheDoiChuaChon.svg") {
      let newSRC = "../image/GheDoiDangChon.svg";
      $(this).attr("src", newSRC);
      listTenGhe.push(tenGhe);
      GiaGhe = GiaGhe + giaGhe;
    }
    if (nowSRC == "../image/GheDoiDangChon.svg") {
      let newSRC = "../image/GheDoiChuaChon.svg";
      let viTri = listTenGhe.indexOf(tenGhe);
      $(this).attr("src", newSRC);
      $(this).attr("src", newSRC);
      listTenGhe.splice(viTri, 1);
      GiaGhe = GiaGhe - giaGhe;
    }
    if (nowSRC == "../image/GheDoiDaChon.svg") {
      return;
    }
    cacGheChon.html("Ghế :" + listTenGhe.join(", "));
    tienCacGheChon.html(GiaGhe + "   đ");
    let tong = GiaGhe + combo;
    $("#total").html(tong + "   đ");
  });

  $("#ngaychieu,#suatchieu").change(function () {
    var ngaychieu = $("#ngaychieu").val();
    var suatchieu = $("#suatchieu").val();
    $("#film_time").html("Ngày  " + ngaychieu + " " + suatchieu + " - Rạp 01");
  });

  var pepngot = 0;
  var upngot = 0;
  var Mirindangot = 0;
  var pepphomai = 0;
  var upphomai = 0;
  var Mirindaphomai = 0;
  $("#plusPN").click(function () {
    pepngot = pepngot + 1;
    $("#pepngot").html(pepngot);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#minusPN").click(function () {
    pepngot = pepngot - 1;
    if (pepngot < 0) pepngot = 0;
    $("#pepngot").html(pepngot);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#plusPP").click(function () {
    pepphomai = pepphomai + 1;
    $("#pepphomai").html(pepphomai);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#minusPP").click(function () {
    pepphomai = pepphomai - 1;
    if (pepphomai < 0) pepphomai = 0;
    $("#pepphomai").html(pepphomai);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#minus7N").click(function () {
    upngot = upngot - 1;
    if (upngot < 0) upngot = 0;
    $("#7upngot").html(upngot);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#plus7N").click(function () {
    upngot = upngot + 1;
    $("#7upngot").html(upngot);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#plus7P").click(function () {
    upphomai = upphomai + 1;
    $("#7upphomai").html(upphomai);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#minus7P").click(function () {
    upphomai = upphomai - 1;
    if (upphomai < 0) upphomai = 0;
    $("#7upphomai").html(upphomai);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#plusMN").click(function () {
    Mirindangot = Mirindangot + 1;
    $("#mirindangot").html(Mirindangot);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#minusMN").click(function () {
    Mirindangot = Mirindangot - 1;
    if (Mirindangot < 0) Mirindangot = 0;
    $("#mirindangot").html(Mirindangot);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#plusMP").click(function () {
    Mirindaphomai = Mirindaphomai + 1;
    $("#mirindaphomai").html(Mirindaphomai);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });
  $("#minusMP").click(function () {
    Mirindaphomai = Mirindaphomai - 1;
    if (Mirindaphomai < 0) Mirindaphomai = 0;
    $("#mirindaphomai").html(Mirindaphomai);
    combo =
      (pepngot + upngot + Mirindangot) * 67000 +
      (pepphomai + upphomai + Mirindaphomai) * 75000;
    $("#tiencombo").html(combo + "  đ");
    $("#total").html(GiaGhe + combo + "   đ");
  });

  $("#hoten").on("blur", function (e) {
    var hoten = $("#hoten").val();
    var checkhoten = /^[A-ZĐ][a-zđà-ỹ]*$/;
    if (checkhoten.test(hoten) && hoten != "") {
      $("#hoten").addClass("is-valid").removeClass("is-invalid");
      $("#errorhoten").text("");
    } else {
      $("#hoten").addClass("is-invalid").removeClass("is-valid");
      $("#errorhoten").text("Họ và tên bắt đầu bằng ký tự chữ hoa");
    }
  });
  $("#email").on("blur", function (e) {
    var email = $("#email").val();
    var checkemail = /[A-Za-z0-9]+@gmail\.com$/;
    if (checkemail.test(email) && email != "") {
      $("#email").addClass("is-valid").removeClass("is-invalid");
      $("#erroremail").text("");
    } else {
      $("#email").addClass("is-invalid").removeClass("is-valid");
      $("#erroremail").text("Email phải đúng định dạng");
    }
  });
  $("#sdt").on("blur", function (e) {
    var sdt = $("#sdt").val();
    var checksdt = /^0[0-9]{9}/;
    if (checksdt.test(sdt) && sdt != "") {
      $("#sdt").addClass("is-valid").removeClass("is-invalid");
      $("#errorsdt").text("");
    } else {
      $("#sdt").addClass("is-invalid").removeClass("is-valid");
      $("#errorsdt").text("Số điện thoại phải đúng định dạng");
    }
  });
  $("#datve").click(function(){
    if($("#errorhoten").hasClass("is-valid") && $("#erroremail").hasClass("is-valid") && $("#errorsdt").hasClass("is-valid") ){
      
    }
  })
});
