$(document).ready(function () {
  $("#chon").change(function () {
    if ($(this).val()=="gv") {
      $("#diaChi").html(
        "<p>Rạp TH2D Gò Vấp</p><p>116A Lê Lợi, Phường 7, Quận Gò Vấp, TP.Hồ Chí Minh</p><p>Đặt vé : 0914 941 896</p>"
      );
    } 
    if ($(this).val()=="gl") {
      $("#diaChi").html(
        "<p>Rạp TH2D Gia Lai</p><p>29A Lý Thường Kiệt, Thị trấn Đak Đoa, Huyện Đak Đoa, Tỉnh Gia Lai</p><p>Đặt vé : 0914 941 896</p>"
      );
    } 
    if ($(this).val()=="dt") {
      $("#diaChi").html(
        "<p>Rạp TH2D Đồng Tháp</p><p>64 Lý Thái Tổ, Huyện Nhơn Trạch, Tỉnh Đồng Tháp</p><p>Đặt vé : 0397 538 105</p>"
      );
    } 
    if ($(this).val()=="dn") {
      $("#diaChi").html(
        "<p>Rạp TH2D Đồng Nai</p><p>64 Lý Thái Tổ, Huyện Nhơn Trạch, Tỉnh Đồng Nai</p><p>Đặt vé : 0397 538 105</p>"
      );
    }
  });
});

const cinemaData = {
  hcm: {
    "Rạp TH2D Gò Vấp": {
      inf1: "Rạp TH2D Gò Vấp",
      inf2: "116A Lê Lợi, Phường 7, Quận Gò Vấp, TP.Hồ Chí Minh",
      inf3: "Đặt vé : 0914 941 896",
    },
  },
  gl: {
    "Rạp TH2D Gia Lai": {
      inf1: "Rạp TH2D Gia Lai",
      inf2: "29A Lý Thường Kiệt, Thị trấn Đak Đoa, Huyện Đak Đoa, Tỉnh Gia Lai",
      inf3: "Đặt vé : 0914 941 896",
    },
  },
  dn: {
    "Rạp TH2D Đồng Nai": {
      inf1: "Rạp TH2D Đồng Nai",
      inf2: "64 Lý Thái Tổ, Huyện Nhơn Trạch, Tỉnh Đồng Nai",
      inf3: "Đặt vé : 0397 538 105",
    },
  },
  dt: {
    "Rạp TH2D Đồng Tháp": {
      inf1: "Rạp TH2D Đồng Tháp",
      inf2: "64 Lý Thái Tổ, Huyện Nhơn Trạch, Tỉnh Đồng Tháp",
      inf3: "Đặt vé : 0397 538 104",
    },
  },
};
