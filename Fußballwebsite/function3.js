const loadGoalsData = () => {
    fetch("https://api.openligadb.de/getgoalgetters/bl2/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })
}
const fillTable = (data) => {
    let html = "";

    data.forEach((element, Index) => {
        html += `<div class="player-container">
        <span id="place"> ${Index + 1} </span>
        <span id="name"> ${element.goalGetterName}</span>
        <span id="club">${element.goalCount}</span>
      </div>`

    });
    document.getElementById("dates").innerHTML = html;
};

loadGoalsData();

document.getElementById("back").addEventListener('click', () => {
    window.location.href = 'start.html';
});