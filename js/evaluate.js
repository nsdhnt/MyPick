const backButton = document.querySelector(`.backButton`);
const repeatEat = document.querySelector(`.repeatEat`);
const toast = document.getElementById('toast');


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



repeatEat.forEach(button => {
    button.addEventListener(`click`, function(event){
        event.preventDefault();
        
        // 親要素(menuCard)を取得
        const card = button.closest('.menuCard');
        
        // 保存したい情報をオブジェクトにまとめる
        const shopData = {
            title: card.querySelector('h3').textContent,
            text: card.querySelector('.menuText').innerHTML,
            // 画像なども必要ならここに追加
        };

        if(button.src.includes(`img/bookmark_before.png`)){
            button.src = `img/bookmark_after.png`;
            saveBookmark(shopData); // 保存関数へ
            toast.textContent = "保存しました！";
        } else {
            button.src = `img/bookmark_before.png`;
            removeBookmark(shopData.title); // 削除関数へ
            toast.textContent = "解除しました！";
        }
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    });
});
