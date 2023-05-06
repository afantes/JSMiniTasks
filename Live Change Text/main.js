let myTitle = document.getElementById('title'),
    myContent = document.getElementById('content'),
    myTitleLive = document.getElementById('title-live'),
    myContentLive = document.getElementById('content-live');


myTitle.onkeyup = function () {
    myTitleLive.textContent = this.value;
};

myContent.onkeyup = function () {
    myContentLive.textContent = this.value;
};