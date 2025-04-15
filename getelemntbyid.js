function displayNevOnClick() {
    let nev = prompt("Adj meg egy nevet:");
    const targetElement = document.getElementById("kiiras");   
    targetElement.innerText = "Szia, " + nev;
}


clickCount = 0;
function trackClicks() {
    clickCount++;
    const button = document.getElementById("clickCounterButton");
    button.innerText = `Ennyiszer nyomott a gombra: ${clickCount}`;
}

function changeColortoBlack() {
    document.body.style.backgroundColor = "black";
}

function changeColortoWhite() {
    document.body.style.backgroundColor = "white";
}