function tinhTrungBinh() {
    let so1 = parseFloat(document.getElementById("so1").value) || 0;
    let so2 = parseFloat(document.getElementById("so2").value) || 0;
    let so3 = parseFloat(document.getElementById("so3").value) || 0;
    let so4 = parseFloat(document.getElementById("so4").value) || 0;
    let so5 = parseFloat(document.getElementById("so5").value) || 0;

    let tb = (so1 + so2 + so3 + so4 + so5) / 5;

    document.getElementById("trungbinh").value = (tb === 0) ? "0" : tb.toFixed(1);
  }