enum Role {
    Formateur = "Formateur",
    Administateur = "Administrateur",
    Stagiaire = "Stagiaire",
    Utilisateur = "Utilisateur",
}

class Utilisateur {
    id: number = 0;
    name: string;
    age: number = 0;
    role: string;
    location: string;

    constructor(name: string, location: string, role: string) {
        this.name = name;
        this.location = location;
        this.role = role;
    }
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

function populateList() {
    fetch("http://82.165.127.44/api/users").then((reponse: any) =>
        reponse.json().then((data: any) => {
            console.log(data);
        })
    );
}

populateList();
getStagiaire();
