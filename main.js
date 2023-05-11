// tabella 
const gridEl = document.getElementById("tabella");
// numero caselle di gioco
const dimensionGrid = 100;

// invochiamo la funzione per creare la tabella
generateGrid(gridEl, dimensionGrid);



/**********************************
 *         FUNCTIONS
 **********************************/

/**
 * funzione che genera una tabella di gioco con le rispettive caselle
 * @param {HTMLElement} grid valore che andrà a generare la griglia di gioco
 * @param {int} dimension valore che indica il numero di caselle
 */


function generateGrid(grid, dimension) {

    //  METODO WHITE-LIST
    const whiteList = [];
    // ciclo for per aggiungere all'array solo i numeri ammessi
    for (let i = 0; i < dimension; i++) {
        // aggiungo i numeri all'array (partendo da 1 a ...)
        whiteList.push(i + 1);
    }

    // ciclo for per generare n caselle in base alla dimension
    for (let i = 0; i < dimension; i++) {

        // creo un div che sarà la mia casella
        const cella = document.createElement("div");
        // aggiungo la classe "square" in css 
        cella.classList.add("square")

        // cliccando la casella si accende e si spegne al click
        cella.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
            }
        )

        // appendo la casella alla tabella
        grid.append(cella);

    }

}