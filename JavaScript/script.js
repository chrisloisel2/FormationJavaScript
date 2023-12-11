function printData(data) {
    console.log(data);
}

function getJson(objet) {
    objet.json().then(printData);
}

function getUser() {
    fetch("http://82.165.127.44/api/users").then(getJson);
}
