let hitPointsEl = document.getElementById("hit-points-el");

let hitPoints = 0;

function minus() {
    hitPoints = hitPoints - 1;
    hitPointsEl.innerText = hitPoints;
}

function add() {
    hitPoints = hitPoints + 1;
    hitPointsEl.innerText = hitPoints;
}