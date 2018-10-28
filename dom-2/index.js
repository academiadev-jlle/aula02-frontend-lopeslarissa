document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    loadStarships();
}

function loadStarships() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://swapi.co/api/starships/", true);
    xhr.send();
    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var starships = JSON.parse(xhr.responseText).results;

            for(let i = 0; i < starships.length; i++){
                insertStarships(starships[i].name, starships[i].model, starships[i].manufacturer, starships[i].starship_class);
            }
        }
    }
}

function insertStarships(name, model, manufacturer, starshipClass){
    const row = document.createElement('tr');
    const infoName = document.createElement('td');
    const infoModel = document.createElement('td');
    const infoManufacturer = document.createElement('td');
    const infoClass = document.createElement('td');

    infoName.textContent = name;
    infoModel.textContent = model;
    infoManufacturer.textContent = manufacturer;
    infoClass.textContent = starshipClass;

    row.appendChild(infoName);
    row.appendChild(infoModel);
    row.appendChild(infoManufacturer);
    row.appendChild(infoClass);

    const tabela = document.querySelector('.table-starships tbody');
    tabela.prepend(row);
}
