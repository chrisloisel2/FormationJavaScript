// Interface pour représenter une tâche

enum Status {
    TODO,
    DONE,
}

interface Tache {
    id: number;
    description: string;
    status: Status; // true/false = 0/1
}

const lst: Tache[] = [];

// Récupérer la liste des tâches
function listerTaches() {
    fetch("http://82.165.127.44/api/taches").then((response) =>
        response.json().then((data: any) => {
            data.forEach((tache: Tache) => lst.push(tache));
            console.log(lst);
        })
    );
}

// Ajouter une tâche
function ajouterTache(tache: Tache) {
    fetch("http://82.165.127.44/api/taches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tache),
    }).then((response: any) =>
        response.json().then((data: any) => lst.push(data))
    );
}

// Supprimer une tâche
function supprimerTache(id: number) {
    fetch(`http://82.165.127.44/api/taches/${id}`, {
        method: "DELETE",
    }).then((response) => response.json().then((data) => console.log(data)));
}

// Modifier une tâche
function modifierTache(tache: Tache) {
    fetch(`http://82.165.127.44/api/taches/${tache.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tache),
    }).then((response) => response.json().then((data) => console.log(data)));
}

// Récupérer une tâche par son ID
function recupererTacheParId(id: number) {
    fetch(`http://82.165.127.44/api/taches/${id}`).then((response) =>
        response.json().then((data) => console.log(data))
    );
}

// Filtrer les tâches par statut
function filtrerTachesParStatut() {
    let listeFiltree = lst.filter((tache) => tache.status == 0);
    console.log("Liste des tâches non faites :");
    console.log(listeFiltree);
}

function filtrerTachesfaites() {
    let listeFiltree = lst.filter((tache) => tache.status == 1);
    console.log("Liste des tâches faites :");
    console.log(listeFiltree);
}

// Ordonner les tâches par ID
function ordonnerTachesParIdAsc(asc: boolean) {
    if (asc) {
        lst.sort((a, b) => a.id - b.id).forEach((tache) => console.log(tache));
    } else {
        lst.sort((a, b) => b.id - a.id).forEach((tache) => console.log(tache));
    }
}

console.log("Liste des tâches :");
listerTaches();
console.log("Ajout d'une tâche :");
ajouterTache({ id: 5, description: "Tâche 5", status: 0 });
console.log("Suppression d'une tâche :");
supprimerTache(15);
console.log("Modification d'une tâche :");
modifierTache({ id: 11, description: "Tâche 1", status: 0 });
console.log("Récupération d'une tâche par son ID :");
recupererTacheParId(12);
console.log("Filtrage des tâches par statut :");
filtrerTachesParStatut();
filtrerTachesfaites();
