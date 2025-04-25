function tinhTong() {
    let so = parseInt(document.getElementById("so").value) || 0;

    if (so < 10 || so > 99) {
        document.getElementById("tong").value = "Vui lòng nhập số 2 chữ số!";
        return;
    }

    let hangChuc = Math.floor(so / 10);
    let hangDonVi = so % 10;
    let tong = hangChuc + hangDonVi;

    document.getElementById("tong").value = tong;
}