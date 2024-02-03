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

function loadCinemas() {
  var provinceSelect = document.getElementById("provinceSelect");
  var cinemaSelect = document.getElementById("cinemaSelect");

  cinemaSelect.innerHTML = "<option value=''>CHỌN RẠP</option>";

  var selectedProvince = provinceSelect.value;

  if (cinemaData[selectedProvince]) {
    Object.keys(cinemaData[selectedProvince]).forEach(function (cinema) {
      var option = document.createElement("option");
      option.value = cinema;
      option.text = cinema;
      cinemaSelect.appendChild(option);
    });
  }

  document.getElementById("cinemaInfo").textContent = "";
}

function displayCinemaInfo() {
  var cinemaSelect = document.getElementById("cinemaSelect");
  var cinemaInfoDiv = document.getElementById("cinemaInfo");

  var selectedCinema = cinemaSelect.value;

  var selectedProvince = document.getElementById("provinceSelect").value;

  if (
    cinemaData[selectedProvince] &&
    cinemaData[selectedProvince][selectedCinema]
  ) {
    var cinemaInfo = cinemaData[selectedProvince][selectedCinema];
    cinemaInfoDiv.innerHTML = `<p>${cinemaInfo.inf1}</p><p>${cinemaInfo.inf2}</p><p>${cinemaInfo.inf3}</p>`;
  } else {
    cinemaInfoDiv.textContent = "";
  }
}
