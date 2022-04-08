import {
    getPokemon,
    getSpecies
} from "./api.js";

const $image = document.querySelector('#image');
const $textContent = document.querySelector('#textContent');
const $screen = document.querySelector('#screen');

const $name = document.querySelector('#name');
const $number = document.querySelector('#number');

$name.addEventListener('focus', clearInput);
$number.addEventListener('focus', clearInput);

function clearInput(event) {
    $name.value = '';
    $number.value = '';
}

async function findPokemon(id) {
    const pokemon = await getPokemon(id);
    const species = await getSpecies(id);
    const description = species.flavor_text_entries.find((flavor) => flavor.language.name === 'es');
    const sprites = [pokemon.sprites.front_default]
    Object.keys(pokemon.sprites).forEach(function (key) {
        if (pokemon.sprites[key] !== null && key !== "other" && key !== "versions" && key !== "front_default") {
            sprites.push(pokemon.sprites[key]);
            //console.log('Key : ' + key + ', Value : ' + pokemon.sprites[key])
        }
    })

    console.log(sprites);
    return {
        description: description.flavor_text,
        sprites: sprites,
        current: 0,
        name: pokemon.name,
        id: pokemon.id
    };
}

async function setPokemon(id) {
    $name.blur();
    $number.blur();
    $image.style.visibility = 'hidden';
    loader(true);
    const pokemon = await findPokemon(id);
    loader(false);
    $image.style.visibility = 'visible';
    setPokemonImage(pokemon.sprites[0]);
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
    setPokemon,
    setPokemonImage
};