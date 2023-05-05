let myInput = document.querySelector("#my-input");

myInput.onfocus = function () {

    // Store Placeholder Attr in Backup Attribute
    this.setAttribute('data-place', this.getAttribute('placeholder'));

    // Empty Placeholder Attribute
    this.setAttribute('placeholder', '');
};

myInput.onblur = function () {

    // Get Placeholder Attr from Backup Attribute
    this.setAttribute('placeholder', this.getAttribute('data-place'));

    //Empty Backup Attribute
    this.setAttribute('data-place', '');
};