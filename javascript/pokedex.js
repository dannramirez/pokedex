import { getPokemon, getSpecies } from "./api.js";

const $image = document.querySelector('#image');
const $textContent = document.querySelector('#textContent');

async function findPokemon(id) {
    const pokemon = await getPokemon(id);
    const species = await getSpecies(id);
    const description = species.flavor_text_entries.find((flavor)=>flavor.language.name === 'es');
    return { 
        description:description.flavor_text,
        sprites:pokemon.sprites.front_default,};
}

async function setPokemon(id) {
    const pokemon = await findPokemon(id);
    setPokemonImage(pokemon.sprites);
    setPokemonDescription(pokemon.description);    
}

function setPokemonImage(image) {
    $image.src = image;
}

function setPokemonDescription(description) {
    $textContent.textContent = description;       
}
export {setPokemon};