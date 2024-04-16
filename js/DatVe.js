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

  $("#hoten").on("input", function (e) {
    var hoten = $("#hoten").val();
    var checkhoten = /^[A-ZĐ][a-zđà-ỹ]*$/;
    if (checkhoten.test(hoten) && hoten != "") {
      $("#hoten").addClass("is-valid").removeClass("is-invalid");
      $("#errorhoten").text("");
    } else {
      $("#hoten").addClass("is-invalid").removeClass("is-valid");
      $("#errorhoten").text("Họ và tên bắt đầu bằng ký tự chữ hoa");
    }
    if (
      $("#hoten").hasClass("is-valid") &&
      $("#email").hasClass("is-valid") &&
      $("#sdt").hasClass("is-valid")
    ) {
      $("#datve").removeAttr("disabled");
    } else {
      $("#datve").prop("disabled", true);
    }
  });
  $("#email").on("input", function (e) {
    var email = $("#email").val();
    var checkemail = /[A-Za-z0-9]+@gmail\.com$/;
    if (checkemail.test(email) && email != "") {
      $("#email").addClass("is-valid").removeClass("is-invalid");
      $("#erroremail").text("");
    } else {
      $("#email").addClass("is-invalid").removeClass("is-valid");
      $("#erroremail").text("Email phải đúng định dạng");
    }
    if (
      $("#hoten").hasClass("is-valid") &&
      $("#email").hasClass("is-valid") &&
      $("#sdt").hasClass("is-valid")
    ) {
      $("#datve").removeAttr("disabled");
    } else {
      $("#datve").prop("disabled", true);
    }
  });
  $("#sdt").on("input", function (e) {
    var sdt = $("#sdt").val();
    var checksdt = /^0[0-9]{9}/;
    if (checksdt.test(sdt) && sdt != "") {
      $("#sdt").addClass("is-valid").removeClass("is-invalid");
      $("#errorsdt").text("");
    } else {
      $("#sdt").addClass("is-invalid").removeClass("is-valid");
      $("#errorsdt").text("Số điện thoại phải đúng định dạng");
    }
    if (
      $("#hoten").hasClass("is-valid") &&
      $("#email").hasClass("is-valid") &&
      $("#sdt").hasClass("is-valid")
    ) {
      $("#datve").removeAttr("disabled");
    } else {
      $("#datve").prop("disabled", true);
    }
  });
  $("#datve").click(function () {
    $("#datghe").addClass("d-none");
    $("#thanhtoan").removeClass("d-none");
    $("#tt_thoigian").html($("#film_time").html());
    $("#tt_ghechon").html(listTenGhe.join(", "));
    $("#tt_hoten").html($("#hoten").val());
    $("#tt_email").html($("#email").val());
    $("#tt_sdt").html($("#sdt").val());

    $("#tt_tongtien").html(GiaGhe+combo +"  đ")
    $("#tt_tienghe").html(GiaGhe +"  đ")
    $("#tt_tiencombo").html($("#tiencombo").html())

    if (
      pepngot > 0 ||
      pepphomai > 0 ||
      upngot > 0 ||
      upphomai > 0 ||
      Mirindangot > 0 ||
      Mirindaphomai > 0
    ) {
      if (pepngot > 0)
        $("#tt_combo").append("<p>Pepsi + Bắp Ngọt " + pepngot + " combo </p>");
      if (pepphomai > 0)
        $("#tt_combo").append(
          "<p>Pepsi + Bắp Phô Mai " + pepphomai + " combo </p>"
        );
      if (upngot > 0)
        $("#tt_combo").append("<p>7Up + Bắp Ngọt " + upngot + " combo </p>");
      if (upphomai > 0)
        $("#tt_combo").append(
          "<p>7Up + Bắp Phô Mai " + upphomai + " combo </p>"
        );
      if (Mirindangot > 0)
        $("#tt_combo").append(
          "<p>Mirinda + Bắp Ngọt " + Mirindangot + " combo </p>"
        );
      if (Mirindaphomai > 0)
        $("#tt_combo").append(
          "<p>Mirinda + Bắp Phô Mai " + Mirindaphomai + " combo </p>"
        );
    } else {
      $("#tt_combo").html("Không có combo bắp nước nào");
    }
  });
  $("#momo").change(function () {
    if ($(this).prop("checked")) {
      $("#btn_thanhtoan").prop("disabled", false);
    } else {
      $("#btn_thanhtoan").prop("disabled", true);
    }
  });
  $("#zlpay").change(function () {
    if ($(this).prop("checked")) {
      $("#btn_thanhtoan").prop("disabled", false);
    } else {
      $("#btn_thanhtoan").prop("disabled", true);
    }
  });
  $("#qr").change(function () {
    if ($(this).prop("checked")) {
      $("#btn_thanhtoan").prop("disabled", false);
    } else {
      $("#btn_thanhtoan").prop("disabled", true);
    }
  });
  $("#btn_thanhtoan").click(function(){
    if(!$("#dieukhoan").is(":checked")){
      alert("Vui lòng đọc và đồng ý điều khoản trước khi thanh toán !")
    }else{
      $(".qr_sotien").html(GiaGhe + combo + "  đ")
      $("#datghe").addClass("d-none");
      $("#thanhtoan").removeClass("d-none");
      $("#ttv_thoigian").html($("#film_time").html());
      $("#ttv_ghechon").html(listTenGhe.join(", "));
      $("#ttv_hoten").html($("#hoten").val());
      $("#ttv_email").html($("#email").val());
      $("#ttv_sdt").html($("#sdt").val());
      $("#ttv_combo").html($("#tt_combo").html())
      $("#ttv_tongtien").html(GiaGhe+combo +"  đ")
      $("#ttv_tienghe").html(GiaGhe +"  đ")
      $("#ttv_tiencombo").html($("#tt_tiencombo").html())
      if ($("#momo").prop("checked")) {
          $("#momomodal").modal("show");
      }
      else if ($("#zlpay").prop("checked")) {
          $("#zlpaymodal").modal("show");
      }
      else if ($("#qr").prop("checked")) {
          $("#qrmodal").modal("show");
      }
    }
  })
  $(".xacnhan").click(function(){
    alert("Thanh toán vé xem phim thành công")
    $("#thongtinve").removeClass("d-none")
    $("#thanhtoan").addClass("d-none")
  })
});
