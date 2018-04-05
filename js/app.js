const showHeros = (heros) => {
            return `
            <div class="name_heros">
            <h4 id="prenom"></h4>   
            <img src="${heros.images.xs}" >
        </div>
            `
        }

fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then(personne => {

        const testElement = document.getElementById('test')
        const insert = personne.map(showHeros).join(' ')
        testElement.innerHTML = insert
    })