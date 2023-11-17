const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })
}

const fillTable = (data) =>{
    let html = "";

    data.forEach((element, Index) => {
        html +=    `<div class="font-bold  flex justify-center">/
        <span class="p-4 pr-5 font-bold text-white" id="place"> ${Index+1} </span>/
        <span class="p-4 pr-5 font-bold text-white"id="club">${element.teamName}</span>/
        <img class="p-4 pr-5 font-bold text-white max-h-100 max-w-100"id="logo"src="${element.teamIconUrl}"></img>/
        <span class="p-4 pr-5 font-bold text-white"id="games">${element.matches}</span>/
        <span class="p-4 pr-2 font-bold text-white"id="wins">${element.won}</span>/
        <span class="p-4 pr-2 font-bold text-white"id="draws">${element.draw}</span>/
        <span class="p-4 pr-2 font-bold text-white" id="lost">${element.lost}</span>/
        <span class="p-4 pr-5 font-bold text-white"id="goals">${element.goals}</span>/
        <span class="p-4 pr-5 font-bold text-white"id="opgoals">${element.opponentGoals}</span>/
        <span class="p-4 pr-5 font-bold text-white"id="goalsdiff">${element.goalDiff}</span>/
      </div>`
        
    });
    document.getElementById("teams").innerHTML = html;
};
loadData();