const backButton = document.querySelector(`.backButton`);
const bookmarkButtons = document.querySelectorAll(`.bookmarkButton`);

backButton.addEventListener(`click`, function(){
    window.history.back();
});

bookmarkButtons.forEach(button => {
    button.addEventListener(`click`, function(event){
        event.preventDefault();
        if(button.src.includes(`images/bookmark_before.png`)){
            button.src = `images/bookmark_after.png`;
        } else{
            button.src = `images/bookmark_before.png`
        }
    });
});
