const backButton = document.querySelector(`.backButton`);
const bottomSheet = document.getElementById('bottomSheet');
const toggleBtn = document.getElementById('toggleBtn');


backButton.addEventListener(`click`, function(){
    window.history.back();
});

toggleBtn.addEventListener('click', () => {
    // is-openクラスがあれば消す、なければ付ける
    bottomSheet.classList.toggle('is-open');
});