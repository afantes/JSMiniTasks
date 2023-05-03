function capitalizeLetters(string) {

    let oldArray = string.split(' '),
        newArray = [];

    for (let i = 0; i < oldArray.length; i++) {
        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
    }

    return newArray.join(' ');
}

console.log(capitalizeLetters("hello from javaScript file"));