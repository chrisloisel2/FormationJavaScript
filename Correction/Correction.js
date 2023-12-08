// Déclaration du tableau de contacts
let contacts = [];
let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function compter(params) {
//     for (let i = 0; i < params.length; i++) {
//         console.log(params[i]);
//     }
// }

// (params) => {
//     for (let i = 0; i < params.length; i++) {
//         console.log(params[i]);
//     }
// };

// function tri(a, b, fonction) {
//     if (fonction(a, b)) {
//         return a;
//     } else {
//         return b;
//     }
// }

// (a, b, fonction) => {
//     if (fonction(a, b)) {
//         return a;
//     } else {
//         return b;
//     }
// };

// Exercices sur .filter()

//     Filtrer les nombres pairs :
//         Créez un tableau de nombres.
//         Utilisez .filter() pour créer un nouveau tableau contenant uniquement les nombres pairs.

//     Filtrer les chaînes de caractères longues :
//         Créez un tableau de chaînes de caractères.
//         Utilisez .filter() pour créer un nouveau tableau contenant uniquement les chaînes de plus de 5 caractères.

// Lambda
// Retirer le mot clefs function et le nom de la fonction
// Ajouter une flèche => entre les paramètres et le corps de la fonction
// SI le nombre de paramètres est égal à 1, on peut retirer les parenthèses
// SI le corps de la fonction est une seule ligne, on peut retirer les accolades et le mot clefs return

function filtreAboveFive(params) {
    return params > 5;
}

(params) => params > 5;

console.log(test.filter(filtreAboveFive));

console.log(
    test.map((param) => {
        return param * 2;
    })
);

/*

// Fonction foreach, map, filter, reduce, find, findIndex, some, every
// foreach : parcours le tableau et exécute une fonction sur chaque élément
// find : parcours le tableau et renvoie le premier élément qui correspond à la condition
// findIndex : parcours le tableau et renvoie l'index du premier élément qui correspond à la condition
// some : parcours le tableau et renvoie true si au moins un élément correspond à la condition
// every : parcours le tableau et renvoie true si tous les éléments correspondent à la condition
// map : parcours le tableau et renvoie un nouveau tableau avec les éléments modifiés

// Fonction pour ajouter un nouveau contact
function ajouterContact(nom, prenom, numero) {
    if (
        !contacts.some(
            (contact) => contact.nom === nom && contact.prenom === prenom
        )
    ) {
        contacts.push({ nom, prenom, numero });
    } else {
        console.log("Le contact existe déjà.");
    }
}

// Fonction pour supprimer un contact
function supprimerContact(nom) {
    contacts = contacts.filter((contact) => contact.nom !== nom);
}

// Fonction pour afficher tous les contacts
function afficherContacts() {
    contacts.forEach((contact) => {
        console.log(`${contact.nom} ${contact.prenom}: ${contact.numero}`);
    });
}

// Fonction pour rechercher un contact par son nom
function rechercherContact(nom) {
    let contactTrouve = contacts.find((contact) => contact.nom === nom);
    if (contactTrouve) {
        console.log(
            `${contactTrouve.nom} ${contactTrouve.prenom}: ${contactTrouve.numero}`
        );
    } else {
        console.log("Contact non trouvé.");
    }
}

// Fonction pour mettre à jour un contact
function mettreAJourContact(nom, nouveauNumero) {
    let contact = contacts.find((contact) => contact.nom === nom);
    if (contact) {
        contact.numero = nouveauNumero;
    } else {
        console.log("Contact non trouvé pour mise à jour.");
    }
}

// Exemples d'utilisation
ajouterContact("Dupont", "Jean", "0123456789");
ajouterContact("Doe", "John", "9876543210");
afficherContacts();
mettreAJourContact("Dupont", "1234567890");
rechercherContact("Doe");
supprimerContact("Dupont");
afficherContacts();
*/
