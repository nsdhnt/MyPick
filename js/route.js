// const backButton = document.querySelector(`.backButton`);
// const bottomSheet = document.getElementById('bottomSheet');
// const toggleBtn = document.getElementById('toggleBtn');
// const couponBtn = document.querySelector(`.button.coupon`);
// const couponCard = document.querySelector(`.couponCard img`);

// backButton.addEventListener(`click`, function(){
//     window.history.back();
// });

// toggleBtn.addEventListener('click', () => {
//     // is-openクラスがあれば消す、なければ付ける
//     bottomSheet.classList.toggle('is-open');
// });

// // couponBtn.addEventListener(`click`, function(){
// //     couponCard.style.display = `block`;
// // });

// // // console.log(couponBtn);
// // console.log(couponCard);

// window.onload = function() {
//     const couponBtn = document.querySelector('.button.coupon');
//     const couponCard = document.querySelector('.couponCard');

//     // 1. クーポンを表示する（flexにすると中央揃えが効きます）
//     couponBtn.onclick = function() {
//         couponCard.style.display = 'block';
//     };

//     // 2. クーポンエリア（背景）をクリックした時の処理
//     couponCard.onclick = function(event) {
//         // クリックされたのが「背景（couponCard自身）」であれば消す
//         // 画像（img）をクリックした時は消さないように判定
//         if (event.target === couponCard) {
//             couponCard.style.display = 'none';
//         }
//     };
// };


const backButton = document.querySelector('.backButton');
const bottomSheet = document.getElementById('bottomSheet');
const toggleBtn = document.getElementById('toggleBtn');
const couponBtn = document.querySelector('.button.coupon');
const couponCard = document.querySelector('.overlay'); // imgではなく親のdiv等を取得

// 戻るボタン
backButton?.addEventListener('click', () => {
    window.history.back();
});

// ボトムシート切り替え
toggleBtn?.addEventListener('click', () => {
    bottomSheet.classList.toggle('is-open');
});

// --- クーポン表示・非表示のロジック ---

// 1. クーポンを表示する（伝搬を止めるのがコツ）
couponBtn.addEventListener('click', (event) => {
    couponCard.style.display = 'block';
    // bodyまでクリックイベントが伝わって即座に閉じないようにする
    event.stopPropagation();
    // const overlay = document.querySelector('.overlay'); // overlayを取得
    // overlay.classList.add('is-active');
    // event.stopPropagation();
});

// 2. body（画面全体）をクリックしたら閉じる
couponCard.addEventListener('click', (event) => {
    // もしクーポンが表示されているなら隠す
    if (couponCard.style.display === 'block') {
        couponCard.style.display = 'none';
        // const overlay = document.querySelector('.overlay');
        // overlay.classList.remove('is-active');
    }
});

// 3. クーポンの中身（画像など）をクリックしても閉じないようにガード
couponCard.addEventListener('click', (event) => {
    event.stopPropagation();
});