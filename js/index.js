const showHeros = (heros) => {
            return `
            myArray = [${heros.images.xs}]
            <div class="name_heros">
            <h4 id="prenom"></h4>   
            <img src="${heros.images.xs}" >
        </div>
            `
        }

let memory_array

fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then(personne => {

        const testElement = document.getElementById('test')
        const insert = personne.map(showHeros).slice(0, 10)
        testElement.innerHTML = insert

        const myArray = []
        myArray.push(insert)
        console.log(myArray)
        console.log(insert)

        console.log(personne)

		memory_array = personne.map(hero => hero.slug).slice(0, 10)

		memory_array=memory_array.concat(memory_array);
		newBoard(memory_array)
    })



var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		console.log(memory_array[i])
		output += `<div id="tile_${i}" onclick="memoryFlipTile(this, '${memory_array[i]}')"></div>`
	}
	document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile,slug){
	const val = `<img src="https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/images/xs/${slug}.jpg" />`
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				memory_values = [];
            	memory_tile_ids = [];
				if(tiles_flipped == memory_array.length){
					document.getElementById('memory_board').innerHTML = "";
					alert ("Bravo , vous avez gagné !");
					newBoard();
				}
			} else {
				function flip2Back(){
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
            	    tile_1.innerHTML = "";
            	    tile_2.innerHTML = "";
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}