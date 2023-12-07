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
    roues = 4;
    couleur = "rouge";
    porte = 5;
    marque = "Renault";

    constructor(roues, couleur, porte, marque) {
        this.roues = roues;
        this.couleur = couleur;
        this.porte = porte;
        this.marque = marque;
        console.log("Je suis une voiture");
    }

    avancer() {
        console.log("vroum vroum");
    }
}

// Creation d'un objet
let vroum = new Voiture(4, "grise", 4, "lambo");

console.log(vroum);
vroum.avancer();
