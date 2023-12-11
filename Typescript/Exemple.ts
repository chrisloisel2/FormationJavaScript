enum Role {
    Formateur = "Formateur",
    Administateur = "Administrateur",
    Stagiaire = "Stagiaire",
    Utilisateur = "Utilisateur",
}

interface Utilisateur {
    id: number;
    name: string;
    age: number;
    role: string;
    location: string;
}

const lst: Utilisateur[] = [];

function addList(nb: Utilisateur) {
    lst.push(nb);
}

function getStagiaire() {
    for (let elements of lst) {
        if (elements.role == "Stagiaire") {
            console.log(elements);
        }
    }
}

function printList() {
    console.log(lst);
}

// any = n'importe quel type
// Utilisateur[] = tableau d'utilisateur

function populateList() {
    fetch("http://82.165.127.44/api/users")
        .then((response: any) => response.json())
        .then((data: any) => {
            for (let element of data) {
                addList(element);
            }
        });
}

populateList();
