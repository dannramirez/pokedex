import { getPokemon, getSpecies } from "./api.js";

const $form = document.querySelector('#form');
const $image = document.querySelector('#image');
const $textContent = document.querySelector('#textContent');

$form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const form = new FormData($form);
    const id = form.get('id');
    const pokemon = await getPokemon(id);
    const species = await getSpecies(id);


    $image.src = pokemon.sprites.front_default;

    console.log(pokemon , species)
})