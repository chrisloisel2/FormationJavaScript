//Déclaration du tableau de contacts
let contacts = [];
let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function compter(params) {
    for (let i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
}

(params) => {
    for (let i = 0; i < params.length; i++) {
        console.log(params[i]);
    }
};

function tri(a, b, fonction) {
    if (fonction(a, b)) {
        return a;
    } else {
        return b;
    }
}

(a, b, fonction) => {
    if (fonction(a, b)) {
        return a;
    } else {
        return b;
    }
};

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

 Fonction foreach, map, filter, reduce, find, findIndex, some, every
 foreach : parcours le tableau et exécute une fonction sur chaque élément
 find : parcours le tableau et renvoie le premier élément qui correspond à la condition
 findIndex : parcours le tableau et renvoie l'index du premier élément qui correspond à la condition
 some : parcours le tableau et renvoie true si au moins un élément correspond à la condition
 every : parcours le tableau et renvoie true si tous les éléments correspondent à la condition
 map : parcours le tableau et renvoie un nouveau tableau avec les éléments modifiés
*/

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

//

// Déclaration du tableau de contacts

// Fonction pour ajouter un contact
function ajouterContact(nom, prenom, numero) {
    if (!contacts.some((contact) => contact.nom === nom)) {
        contacts.push({ nom, prenom, numero });
        console.log("Contact ajouté :", nom);
    } else {
        console.log("Le contact existe déjà.");
    }
}

// Fonction pour supprimer un contact
function supprimerContact(nom) {
    contacts = contacts.filter((contact) => contact.nom !== nom);
    console.log("Contact supprimé :", nom);
}

// Fonction pour afficher tous les contacts
function afficherContacts() {
    console.log("Liste des contacts:");
    contacts.forEach((contact) =>
        console.log(contact.nom, contact.prenom, contact.numero)
    );
}

// Fonction pour rechercher un contact
function rechercherContact(nom) {
    let contact = contacts.find((contact) => contact.nom === nom);
    if (contact) {
        console.log(
            "Détails du contact:",
            contact.nom,
            contact.prenom,
            contact.numero
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
        console.log("Contact mis à jour :", nom);
    } else {
        console.log("Contact non trouvé.");
    }
}

// Exemples d'utilisation
ajouterContact("Doe", "John", "123456789");
ajouterContact("Smith", "Jane", "987654321");
afficherContacts();
supprimerContact("Doe");
afficherContacts();
ajouterContact("Smith", "Jane", "987654321"); // Teste la duplication
rechercherContact("Smith");
mettreAJourContact("Smith", "111222333");
rechercherContact("Smith");

// Fonction pour ajouter un contact
function ajouterContact(nom, prenom, numero) {
    let existeDeja = false;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nom === nom) {
            existeDeja = true;
            break;
        }
    }

    if (!existeDeja) {
        contacts.push({ nom, prenom, numero });
        console.log("Contact ajouté :", nom);
    } else {
        console.log("Le contact existe déjà.");
    }
}

// Fonction pour supprimer un contact
function supprimerContact(nom) {
    let indexASupprimer = -1;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nom === nom) {
            indexASupprimer = i;
            break;
        }
    }

    if (indexASupprimer !== -1) {
        contacts.splice(indexASupprimer, 1);
        console.log("Contact supprimé :", nom);
    }
}

// Fonction pour afficher tous les contacts
function afficherContacts() {
    console.log("Liste des contacts:");
    for (let i = 0; i < contacts.length; i++) {
        console.log(contacts[i].nom, contacts[i].prenom, contacts[i].numero);
    }
}

// Fonction pour rechercher un contact
function rechercherContact(nom) {
    let contactTrouve = false;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nom === nom) {
            console.log(
                "Détails du contact:",
                contacts[i].nom,
                contacts[i].prenom,
                contacts[i].numero
            );
            contactTrouve = true;
            break;
        }
    }

    if (!contactTrouve) {
        console.log("Contact non trouvé.");
    }
}

// Fonction pour mettre à jour un contact
function mettreAJourContact(nom, nouveauNumero) {
    let contactTrouve = false;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nom === nom) {
            contacts[i].numero = nouveauNumero;
            console.log("Contact mis à jour :", nom);
            contactTrouve = true;
            break;
        }
    }

    if (!contactTrouve) {
        console.log("Contact non trouvé.");
    }
}

// Exemples d'utilisation
ajouterContact("Doe", "John", "123456789");
ajouterContact("Smith", "Jane", "987654321");
afficherContacts();
supprimerContact("Doe");
afficherContacts();
ajouterContact("Smith", "Jane", "987654321"); // Teste la duplication
rechercherContact("Smith");
mettreAJourContact("Smith", "111222333");
rechercherContact("Smith");
