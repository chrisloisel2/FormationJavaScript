// Les variables

let nom;
var prenom;
const age = 56;

// Operation de structure

// if
// else
// while
// for
// switch

// Fonction flechée

// (parametres) => {corps}

function add(a) {
    console.log(a + 6);
}

let lst = [2, 4, 6, 8, 10, 12];

// Fonction de premier ordre

lst.forEach(add);
lst.forEach((a) => {
    console.log(a + 6);
});

// fetch
// fetch envoyer une requete http au backend, attendre la reponse,
// des que la reponse arrive, on va executer le code qui est dans le then
// fetch("https://api.chucknorris.io/jokes/random").then((reponse) => {
//     // Recu un objet reponse au format json
//     reponse.json().then((data) => {
//         console.log(data);
//     });
// });

// fetch
// fetch envoyer une requete http au backend, attendre la reponse,
// des que la reponse arrive, on va executer le code qui est dans le then
// fetch("https://api.chucknorris.io/jokes/random").then(deJson);

// function deJson(reponse) {
//     reponse.json().then(print);
// }

// function print(a) {
//     console.log(a);
// }

// Faire un appel api sur cette adresse et affiche les retours dans la console

// http://82.165.127.44/api/users

// fetch("http://82.165.127.44/api/users").then((reponse) => {
//     reponse.json().then((data) => {
//         console.log(data);
//     });
// });

// Faire un appel api sur cette adresse et recuperer uniquement l'utilisateur demander

// http://82.165.127.44/api/users/:id

// fetch("http://82.165.127.44/api/users/1").then((reponse) => {
//     reponse.json().then((data) => {
//         console.log(data);
//     });
// });

// Vous viendrez ensuite ajouter des utilisateurs avec un post sur cette adresse

// http://82.165.127.44/api/users

// fetch("http://82.165.127.44/api/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         id: "45",
//         nom: "christopher",
//         mdp: "christopher",
//         age: "45",
//         role: "admin",
//         location: "france",
//     }),
// }).then((reponse) => {
//     reponse.json().then((data) => {
//         console.log(data);
//     });
// });
