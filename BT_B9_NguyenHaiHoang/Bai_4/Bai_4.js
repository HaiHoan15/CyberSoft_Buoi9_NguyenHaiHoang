function tinhHinhChuNhat() {
    let dai = parseFloat(document.getElementById("chieudai").value) || 0;
    let rong = parseFloat(document.getElementById("chieurong").value) || 0;
  
    let dt = dai * rong;
    let cv = (dai + rong) * 2;
  
    let format = new Intl.NumberFormat('vi-VN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  
    let ketQua = `Diện tích: ${format.format(dt)}; Chu vi: ${format.format(cv)}`;
    document.getElementById("ketqua_text").value = (dt === 0 && cv === 0) ? "" : ketQua;
  }