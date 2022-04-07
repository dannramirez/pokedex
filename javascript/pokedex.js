import {
    getPokemon,
    getSpecies
} from "./api.js";

const $image = document.querySelector('#image');
const $textContent = document.querySelector('#textContent');
const $screen = document.querySelector('#screen');

const $name = document.querySelector('#name');
const $number = document.querySelector('#number');

$name.addEventListener('focus',clearInput);
$number.addEventListener('focus',clearInput);

function clearInput(event){
        $name.value = '';
        $number.value = '';
}

async function findPokemon(id) {
    const pokemon = await getPokemon(id);
    const species = await getSpecies(id);
    console.log(pokemon, species);
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
    return pokemon;
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