const loadGamesData = () => {
    fetch("https://api.openligadb.de/getbltable/bl2/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let html = "";

    data.forEach((element, Index) => {
        html += `<div class="teams-container">
        <span id="place"> ${Index + 1} </span>
        <img id="logo" src="${element.teamIconUrl}"></img>
        <span id="club">${element.teamName}</span>
        <span id="games">${element.matches}</span>
        <span id="won">${element.won}</span>
        <span id="draws">${element.draw}</span>
        <span id="lost" >${element.lost}</span>
        <span id="goals">${element.goals}</span>
        <span id="opgoals">${element.opponentGoals}</span>
        <span id="goaldiff">${element.goalDiff}</span>
      </div>`

    });
    document.getElementById("dates").innerHTML = html;
};

loadGamesData();

document.getElementById("back").addEventListener('click', () => {
    window.location.href = 'start.html';
});