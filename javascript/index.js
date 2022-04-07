import { setPokemon } from "./pokedex.js";

const $form = document.querySelector('#form');

$form.addEventListener('submit',handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData($form);
    const number = form.get('number');
    const name = form.get('name').toLowerCase();
    const id = number || name; 
    setPokemon(id);
}