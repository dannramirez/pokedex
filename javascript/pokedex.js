import {
    getPokemon,
    getSpecies
} from "./api.js";

const $image = document.querySelector('#image');
const $textContent = document.querySelector('#textContent');
const $screen = document.querySelector('#screen');

const $navigationRight = document.querySelector('#navigationRight');
const $navigationLeft = document.querySelector('#navigationLeft');
const $navigationUp = document.querySelector('#navigationUp');
const $navigationDown = document.querySelector('#navigationDown');

const $name = document.querySelector('#name');
const $number = document.querySelector('#number');

$name.addEventListener('focus',clearInput);
$number.addEventListener('focus',clearInput);

$navigationRight.addEventListener('click', nextPokemon);
$navigationLeft.addEventListener('click', prevPokemon);
$navigationUp.addEventListener('click', nextImage);
$navigationDown.addEventListener('click', prevImage);

function nextPokemon(){
    console.log("Boton presionado1");
};

function prevPokemon(){
    console.log("Boton presionado2");
};

function nextImage(){
    console.log("Boton presionado3");
};

function prevImage(){
    console.log("Boton presionado4");
};


function clearInput(event){
        $name.value = '';
        $number.value = '';
}

async function findPokemon(id) {
    const pokemon = await getPokemon(id);
    const species = await getSpecies(id);
    const description = species.flavor_text_entries.find((flavor) => flavor.language.name === 'es');
    return {
        description: description.flavor_text,
        sprites: pokemon.sprites.front_default,
        name: pokemon.name,
        id: pokemon.id
    };
}

async function setPokemon(id) {
    $name.blur();
    $number.blur();

    loader(true);
    const pokemon = await findPokemon(id);
    loader(false);
    setPokemonImage(pokemon.sprites);
    setPokemonDescription(pokemon.description);
    setPokemonName(pokemon.name);
    setPokemonID(pokemon.id);
}

function loader(isLoading = false) {
    const img = isLoading ? 'url(./images/loading.gif)' : '';
    $image.src = '';
    $screen.style.backgroundImage = img;
}

function setPokemonName(name) {
    $name.value = name.toUpperCase();
}

function setPokemonID(id) {
    $number.value = id;
}

function setPokemonImage(image) {
    $image.src = image;
}

function setPokemonDescription(description) {
    $textContent.textContent = description;
}


export {
    setPokemon
};