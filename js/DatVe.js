$(document).ready(function () {
  var listTenGhe = [];
  let GiaGhe = 0;
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
    }
    else if (nowSRC == "../image/GheDonDangChon.svg") {
      let newSRC = "../image/GheDonChuaChon.svg";
      $(this).attr("src", newSRC);
      listTenGhe.splice(tenGhe);
      GiaGhe = GiaGhe - giaGhe;
    }
    else if (nowSRC == "../image/GheDonDaChon.svg") {
      return;
    }
    cacGheChon.html("Ghế :" + listTenGhe.join(", "));
    tienCacGheChon.html(GiaGhe + "   đ");
  });
  $(".ghedoi").click(function () {
    let nowSRC = $(this).attr("src");
    if (nowSRC == "../image/GheDoiChuaChon.svg") {
      let newSRC = "../image/GheDoiDangChon.svg";
      $(this).attr("src", newSRC);
    }
    if (nowSRC == "../image/GheDoiDangChon.svg") {
      let newSRC = "../image/GheDoiChuaChon.svg";
      $(this).attr("src", newSRC);
    }
    if (nowSRC == "../image/GheDoiDaChon.svg") {
      return;
    }
  });
});
