function tinhLuong() {
    let luong1ngay = parseFloat(document.getElementById("luong1ngay").value) || 0;
    let songaylam = parseFloat(document.getElementById("songaylam").value) || 0;
    let tong = luong1ngay * songaylam;

    document.getElementById("tongluong").value = (tong === 0) ? "0" : tong.toLocaleString('vi-VN');
}