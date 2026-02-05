const backButton = document.querySelector(`.backButton`);
const repeatEat = document.querySelector(`.repeatEat`);

backButton.addEventListener(`click`, function(){
    window.history.back();
});

// repeatEat.addEventListener(`click`, function(){
//     if(repeatEat.style.color === "#593200"){
//         repeatEat.style.backgroundColor = "#ffffff";
//         repeatEat.style.color = "#DCAE73";
//     }
//     else if(repeatEat.style.color === "#DCAE73"){
//         repeatEat.style.backgroundColor = "#DCAE73";
//         repeatEat.style.color = "#593200";
//     }
// });


repeatEat.addEventListener('click', function() {
    // クラスがついているかどうかで判定する
    if (repeatEat.classList.contains('is-active')) {
        // アクティブな状態から元に戻す
        repeatEat.style.backgroundColor = "#ffffff";
        repeatEat.style.color = "#DCAE73";
        repeatEat.classList.remove('is-active');
    } else {
        // アクティブな状態にする
        repeatEat.style.backgroundColor = "#DCAE73";
        repeatEat.style.color = "#593200";
        repeatEat.classList.add('is-active');
    }
});