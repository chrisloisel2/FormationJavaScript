// Quand une variable n'esst pas definie, elle est considéré comme undefined
//let nom: string = "4";

// ! je veux faire taire l'erreur, la valeur SERA passer a l'execution
// ? la variable peut etre nullable

// Initialisation de tableau
let tabnumber: number[] = [1, 2, 3, 4];
let tabstring: string[] = ["1", "2", "3", "4"];

let arraynumber: Array<number> = [1, 2, 3, 4];
let arraystring: Array<string> = ["1", "2", "3", "4"];

// Tuple
// Le tuple est une liste de taille fixe avec des type déclarée pour chacun des elements
let coordonee: [number, number, string] = [6, 5, "Coordonée A"];

// Enumeration
// Liste fini ou les valeur sont prédefine a l'utilisation

enum Fumeur {
    Occasionel = "Occasionel",
    Regulier = "Regulier",
    AncienFumeur = "AncienFumeur",
    Abstinent = "Abstinent",
}

let ProfileUstilisateur: Fumeur = Fumeur.Regulier;

let User: [string, number, Fumeur] = ["Christopher", 27, Fumeur.Regulier];

// Union des types

let NomPeutEtreUndefined: string | undefined = "Christopher";

// Fonction en TypeScript

function testFunction(a: number, b?: number) {
    return a;
}

function testFunction2(a: number, b: number = 6) {
    return a + b;
}
