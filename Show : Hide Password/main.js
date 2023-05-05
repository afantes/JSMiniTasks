let myButton = document.querySelector("#my-button"),
    myInput = document.querySelector("#my-input");

myButton.onclick = function () {

    if (this.textContent === "Show Password") {

        myInput.setAttribute('type', 'text');
        this.textContent = "Hide Password";

    } else {

        myInput.setAttribute('type', 'password');
        this.textContent = "Show Password";
    }
};