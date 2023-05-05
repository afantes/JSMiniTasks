let myTextarea = document.getElementById("my-text"),
    mySpan = document.getElementById("my-span");

myTextarea.onkeyup = function () {

    mySpan.textContent = 50 - this.value.length;

    if (mySpan.textContent < 0) {

        mySpan.style.color = '#F00';

    } else {

        mySpan.style.color = '#000';
    }
};