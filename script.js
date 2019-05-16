// Initialisation des variables
let coups = 0;

// Position aléatoire du trésor comprise entre 0 et 8
let tresor = Math.floor(Math.random() * 8) + "-" + Math.floor(Math.random() * 8)

function clickCellule(idCase) {
    // Partie comptage de coups
    coups += 1;
    compte.innerHTML = coups;

    // Si trésor découvert
    if (tresor == idCase) {
        document.getElementById(idCase).className += 'good';
        alert("Bravo ! Vous avez trouvé le trésor en " + coups + " coups de pelle !");

        // Si le trésor est sur la même colonne
    } else if (tresor[0] == idCase[0]) {
        document.getElementById(idCase).className += 'presqueColonne';

        // Si le trésor est sur la même ligne
    } else if (tresor[2] == idCase[2]) {
        document.getElementById(idCase).className += 'presqueLigne';

        // Autrement, s'il n'est ni sur la même ligne, ni sur la même colonne 
    } else {
        document.getElementById(idCase).className += 'bad';
    }

}


function initTab() {

    // Génération du tableau en HTML
    tableau = '<table class="tresor" style="height: 250px;" width="902">\n<tbody>';

    // Boucle de 8 lignes
    for (let x = 0; x < 8; x++) {
        tableau = tableau + "<tr>";

        // Boucle de 8 colonnes
        for (let y = 0; y < 8; y++) {
            let idCase = String(y) + "-" + String(x);
            tableau = tableau + '<td id="' + idCase + '" onclick="clickCellule(this.id);" style="width: 45.3833px;">&nbsp;';
        }
    }

    // Afficher le tableau
    emplacementTable.innerHTML = tableau;

}