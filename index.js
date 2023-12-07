function tri(a, b, logique) {
    if (logique(a, b)) {
        return a;
    } else {
        return b;
    }
}

tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < tab.length; i++) {
//     console.log(tab[i]);
// }

//fonction première
// foreach, map, filter, reduce, find, findIndex
tab.forEach((element) => {
    console.log(element);
});

//index0, 1, 2, 3, 4

console.log(tri(2, 3, (a, b) => a > b)); // 3

// Creation de ma classe

class Voiture {
    // attribut de classe
    static VoitudeCompte = 0;

    // attribut d'instance
    id = 0;
    roues = 4;
    couleur = "rouge";
    porte = 5;
    marque = "Renault";

    constructor(roues, couleur, porte, marque) {
        this.roues = roues;
        this.couleur = couleur;
        this.porte = porte;
        this.marque = marque;
        Voiture.VoitudeCompte++;
        this.id = Voiture.VoitudeCompte;
        console.log(this);
    }

    avancer() {
        console.log("vroum vroum");
    }

    // Design pattern : singleton, factory, builder, prototype, observer, decorator, ...
    // https://fr.wikipedia.org/wiki/Patron_de_conception
    // Anti-pattern : https://fr.wikipedia.org/wiki/Antipattern
    // methode de classe
    static klaxonner() {
        console.log("pouet pouet");
    }

    // attribut de classe
    static roues = 4;
}

// Voiture.klaxonner();
// Creation d'un objet
let vroum = new Voiture(4, "grise", 4, "lambo");

console.log(vroum);
Voiture.klaxonner();
