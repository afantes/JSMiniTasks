let myText = "Hello from JavaScript, this is type writer effects on text",
    myButton = document.getElementById("button"),
    i = 0;

myButton.onclick = function () {

    let typeWriter = setInterval(function () {

        document.getElementById('type').textContent += myText[i];
        i += 1;

        if (i > myText.length - 1) {
            clearInterval(typeWriter);
        }

    }, 100);
};