function loadBai(path, btn) {
    document.getElementById("frame").src = path;

    document.querySelectorAll('.menu button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}