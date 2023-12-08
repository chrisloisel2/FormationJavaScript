/*

 Fonction foreach, map, filter, reduce, find, findIndex, some, every
 foreach : parcours le tableau et exécute une fonction sur chaque élément
 find : parcours le tableau et renvoie le premier élément qui correspond à la condition
 findIndex : parcours le tableau et renvoie l'index du premier élément qui correspond à la condition
 some : parcours le tableau et renvoie true si au moins un élément correspond à la condition
 every : parcours le tableau et renvoie true si tous les éléments correspondent à la condition
 map : parcours le tableau et renvoie un nouveau tableau avec les éléments modifiés
*/

// Exercices sur .filter()
// Filtrer les nombres pairs
let nombres = [1, 2, 3, 4, 5, 6];
//[1, 2, 3, 4, 5, 6];
// 0  1  2  3  4  5
// indexage = position d'un element dans mon tableau
// On utilise .filter sur les collection (liste, vecteur, map, btree, ...)

result = [];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 == 0) {
        result.push(nombres[i]);
    }
}

// Lambda = Fonction anonyme = Fonction fléchée

// Le resultat d'une condition est un booléen
console.log(5 % 2 == 0);

// Branchless programming
// Branchement conditionnel
function estPair(nombre) {
    return nombre % 2 == 0;
}

// Lambda
// Retirer le mot clefs function et le nom de la fonction
// Ajouter une flèche => entre les paramètres et le corps de la fonction
// SI le nombre de paramètres est égal à 1, on peut retirer les parenthèses
// SI le corps de la fonction est une seule ligne, on peut retirer les accolades et le mot clefs return

let listeFiltree = nombres.filter((nombre) => nombre % 2 == 0);

console.log(nombres);
console.log(listeFiltree);

// Filtrer les chaînes de caractères longues
let chaines = ["chat", "chien", "éléphant", "tigre"];
let longuesChaines = chaines.filter((chaine) => chaine.length >= 5);

console.log(chaines);
console.log(longuesChaines);

let noms = ["Alice", "Bob", "Charlie"];

// Exercices sur .map()
// Noms en majuscules
let majuscules = noms.map((nom) => nom.toUpperCase());

console.log(noms);
console.log(majuscules);

// Calculer le carré des nombres
// let nombres = [1, 2, 3, 4, 5, 6];
// let carres = [1 * 1, 2 * 2, 3 * 3, 4 * 4, 5 * 5, 6 * 6];

let carres = nombres.map((num) => num * num);

// Exercices sur .reduce()
// let nombres = [1, 2, 3, 4, 5, 6];
// let somme = 1 + 2 + 3 + 4 + 5 + 6;
// Calculer la somme
let somme = nombres.reduce((acc, num) => acc + num, 0);

// Compter le nombre d'occurrences
// Compter le nombre d'occurrences :
// Créez un tableau de chaînes de caractères.
// Utilisez .reduce() pour créer un objet qui compte le nombre de fois qu'une chaîne apparaît dans le tableau.
chaines = ["chat", "chien", "éléphant", "chat", "chat", "tigre"];
// {
// chat : 3,
// chien : 1,
// éléphant : 1,

//}

let occurrences = chaines.reduce((acc, chaine) => {
    acc[chaine] = (acc[chaine] || 0) + 1;
    return acc;
}, {});

console.log(occurrences);

// Exercices sur .sort()
// Trier par âge
let personnes = [
    { nom: "Alice2", age: 2 },
    { nom: "Bob", age: 30 },
    { nom: "Alice25", age: 25 },
    { nom: "Alice5", age: 5 },
];

personnes.sort((a, b) => b.age - a.age);

// Trier les chaînes alphabétiquement
let mots = ["banane", "apple", "cerise"];
mots.sort();

console.log(mots);

// Exercices sur .find()
// Trouver par nom
// let personnes = [
//     { nom: "Alice2", age: 2 },
//     { nom: "Bob", age: 30 },
//     { nom: "Alice25", age: 25 },
//     { nom: "Alice5", age: 5 },
// ];

let alice = personnes.find((personne) => personne.nom === "Alice");

// for (let i = 0; i < personnes.length; i++) {
//     if (personnes[i].nom === "Alice") {
//         return personnes[i];
//     }
// }

// Trouver le premier nombre supérieur à 10
let premierSup10 = nombres.find((num) => num > 10);
