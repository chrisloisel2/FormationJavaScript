// Quand une variable n'esst pas definie, elle est considéré comme undefined
let nom!: String;

// ! je veux faire taire l'erreur, la valeur SERA passer a l'execution
// ? la variable peut etre nullable

// Initialisation de tableau
let tabNumber: Number[] = [1, 2, 3, 4];
let tabString: String[] = ["1", "2", "3", "4"];

let arrayNumber: Array<Number> = [1, 2, 3, 4];
let arrayString: Array<String> = ["1", "2", "3", "4"];

// Tuple
// Le tuple est une liste de taille fixe avec des type déclarée pour chacun des elements
let coordonee: [Number, Number, String] = [6, 5, "Coordonée A"];

// Enumeration
// Liste fini ou les valeur sont prédefine a l'utilisation

enum Fumeur {
    Occasionel,
    Regulier,
    AncienFumeur,
    Abstinent,
}

let ProfileUstilisateur: Fumeur = Fumeur.Regulier;

let User: [String, Number, Fumeur] = ["Christopher", 27, Fumeur.Regulier];
