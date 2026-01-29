const backButton = document.querySelector(`.backButton`);
const bookmarkButtons = document.querySelectorAll(`.bookmarkButton`);
const toast = document.getElementById('toast');

backButton.addEventListener(`click`, function(){
    window.history.back();
});

// bookmarkButtons.forEach(button => {
//     button.addEventListener(`click`, function(event){
//         event.preventDefault();
//         if(button.src.includes(`images/bookmark_before.png`)){
//             button.src = `images/bookmark_after.png`;
//             toast.textContent = "ブックマークに保存しました！";
//             toast.style.backgroundColor = "#333";
//         } else{
//             button.src = `images/bookmark_before.png`;
//             toast.textContent = "ブックマークを解除しました！";
//             toast.style.backgroundColor = "#333";
//         }
//         toast.classList.add(`show`);
//         setTimeout(() => {
//             toast.classList.remove('show');
//         }, 2000);
//     });
// });

bookmarkButtons.forEach(button => {
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

        if(button.src.includes(`images/bookmark_before.png`)){
            button.src = `images/bookmark_after.png`;
            saveBookmark(shopData); // 保存関数へ
            toast.textContent = "保存しました！";
        } else {
            button.src = `images/bookmark_before.png`;
            removeBookmark(shopData.title); // 削除関数へ
            toast.textContent = "解除しました！";
        }
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    });
});

// ローカルストレージに保存する関数
function saveBookmark(data) {
    let list = JSON.parse(localStorage.getItem('bookmarks')) || [];
    // 重複チェック（店名で判断）
    if (!list.some(item => item.title === data.title)) {
        list.push(data);
        localStorage.setItem('bookmarks', JSON.stringify(list));
    }
}

// ローカルストレージから削除する関数
function removeBookmark(title) {
    let list = JSON.parse(localStorage.getItem('bookmarks')) || [];
    list = list.filter(item => item.title !== title);
    localStorage.setItem('bookmarks', JSON.stringify(list));
}


// タブの見出し（tab-item）を取得
const tabItems = document.querySelectorAll(".tabItem");

tabItems.forEach((tabItem) => {
    tabItem.addEventListener("click", () => {
    // すべてのタブを非アクティブにする
    tabItems.forEach((t) => {
        t.classList.remove("active");
    });
    // すべてのコンテンツを非表示にする
    const tabPanels = document.querySelectorAll(".tabPanel");
    tabPanels.forEach((tabPanel) => {
        tabPanel.classList.remove("active");
    });

    // クリックされたタブをアクティブにする
    tabItem.classList.add("active");

    // 対応するコンテンツを表示
    const tabIndex = Array.from(tabItems).indexOf(tabItem);
    tabPanels[tabIndex].classList.add("active");
    });
});