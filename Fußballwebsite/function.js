document.getElementById("text").addEventListener('click', () => {
    window.location.href = 'table.html';
});

const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}


const loadGamesData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillUpcomingEvents(data);
        })
    })
}