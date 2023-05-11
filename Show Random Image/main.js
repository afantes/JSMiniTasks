let myElement = document.getElementById('myImg'),
    myImgs = [
        'images/01.avif',
        'images/02.jpeg',
        'images/03.jpeg',
        'images/04.jpeg'
    ];

function changeImage(myElement, myImgs) {

    setInterval(function () {

        let myRandomKey = Math.floor(Math.random() * myImgs.length);

        myElement.src = myImgs[myRandomKey];

    }, 2000);
}

changeImage(myElement, myImgs);