if (window.location.hash) {

    let hash = window.location.hash.substring(1);

    if (hash === 'anas') {

        console.log("Good, anas hash is found");

    } else {

        console.log("Bad, anas hash is not found");

    }

} else {

    console.log("Bad, theres no hash in link");

}