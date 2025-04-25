function quyDoi() {
    let usd = parseFloat(document.getElementById("usd").value.replace(",", ".")) || 0;
    let tyGia = 23500;
    let vnd = usd * tyGia;
 
    let ketqua = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0
    }).format(vnd);
  
    document.getElementById("vnd").value = (vnd === 0) ? "0" : ketqua;
  }
  