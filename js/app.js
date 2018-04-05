fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then(personne => {
        console.log(personne)
        // const alumnisElement = document.getElementById('block_alumnis')
        // const alumniElements = personne.map(showAlumnis).join(' ')
        // alumnisElement.innerHTML = alumniElements

        // const nbElement = document.getElementById('nb_alumni')
        // nbElement.innerHTML = (`
        //         <p>${personne.length} membres correspondent à votre recherche</p>
        //     `)
        // console.log(personne)
    })