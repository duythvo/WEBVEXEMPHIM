$(document).ready(function () {
  $("#chon").change(function () {
    if ($(this).val()=="gv") {
      $("#diaChi").html(
        "<p>Rạp TH2D Gò Vấp</p><p>116A Lê Lợi, Phường 7, Quận Gò Vấp, TP.Hồ Chí Minh</p><p>Đặt vé : 0914 941 896</p>"
      );
      $("#rapgl,#rapdn,#rapdt").addClass("d-none");
      $("#rapgv").removeClass("d-none");
    } 
    if ($(this).val()=="gl") {
      $("#diaChi").html(
        "<p>Rạp TH2D Gia Lai</p><p>29A Lý Thường Kiệt, Thị trấn Đak Đoa, Huyện Đak Đoa, Tỉnh Gia Lai</p><p>Đặt vé : 0914 941 896</p>"
      );
      $("#rapgv,#rapdn,#rapdt").addClass("d-none");
      $("#rapgl").removeClass("d-none");
    } 
    if ($(this).val()=="dt") {
      $("#diaChi").html(
        "<p>Rạp TH2D Đồng Tháp</p><p>64 Lý Thái Tổ, Huyện Nhơn Trạch, Tỉnh Đồng Tháp</p><p>Đặt vé : 0397 538 105</p>"
      );
      $("#rapgl,#rapdn,#rapgv").addClass("d-none");
      $("#rapdt").removeClass("d-none");
    } 
    if ($(this).val()=="dn") {
      $("#diaChi").html(
        "<p>Rạp TH2D Đồng Nai</p><p>64 Lý Thái Tổ, Huyện Nhơn Trạch, Tỉnh Đồng Nai</p><p>Đặt vé : 0397 538 105</p>"
      );
      $("#rapgl,#rapgv,#rapdt").addClass("d-none");
      $("#rapdn").removeClass("d-none");
    }
  });

  
});


