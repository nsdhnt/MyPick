const bottomSheet = document.getElementById('bottomSheet');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    // is-openクラスがあれば消す、なければ付ける
    bottomSheet.classList.toggle('is-open');
});