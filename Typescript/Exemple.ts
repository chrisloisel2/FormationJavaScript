enum Role {
    Formateur = "Formateur",
    Administateur = "Administrateur",
    Stagiaire = "Stagiaire",
    Utilisateur = "Utilisateur",
}

class Utilisateur {
    id: number = 0;
    name: string;
    role: Role;
    location: string;

    constructor(name: string, location: string, role: Role) {
        this.name = name;
        this.location = location;
        this.role = role;
    }
}

const lst: Utilisateur[] = [
    new Utilisateur("Arnaud", "france", Role.Stagiaire),
    new Utilisateur("Vincent", "france", Role.Stagiaire),
    new Utilisateur("Mickael", "france", Role.Stagiaire),
    new Utilisateur("Christopher", "Belgique", Role.Formateur),
];

function addList(nb: Utilisateur) {
    lst.push(nb);
}

function printList() {
    console.log(lst);
}

printList();
