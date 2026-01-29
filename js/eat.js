const backButton = document.querySelector(`.backButton`);

backButton.addEventListener(`click`, function(){
    window.history.back();
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('bookmarkContainer');
    const backButton = document.querySelector('.backButton');

    // 戻るボタンの処理
    if (backButton) {
        backButton.addEventListener('click', () => window.history.back());
    }

    // ローカルストレージからデータを取得
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // データが空の場合の表示
    if (savedBookmarks.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">ブックマークはありません</p>';
        return;
    }

    // 保存されたデータ分だけHTMLを作る
    savedBookmarks.forEach(item => {
        const html = `
            <div class="menuWrap">
                <div class="menuCard">
                    <div class="menuContent1">
                        <div class="menuLeft"><p></p></div>
                        <div class="menuRight">
                            <h3>${item.title}</h3>
                            <p class="menuText">${item.text}</p>
                        </div>
                    </div>
                    <div class="menuContent2">
                        <p><a href="route.html"><img src="images/go_eat.png" alt="" class="goEat">食べに行く</a></p>
                        <p><a href="#" class="deleteBtn" data-title="${item.title}"><img src="images/delete.png" alt="">削除する</a></p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });

    // 削除ボタンの機能を追加したい場合はここ（後述も可能）
});