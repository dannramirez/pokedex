import { setPokemon } from "./pokedex.js";

const $form = document.querySelector('#form');
const $name = document.querySelector('#name');
const $number = document.querySelector('#number');

$name.addEventListener('focus',clearInput);
$number.addEventListener('focus',clearInput);

function clearInput(event){
    $name.value = '';
    $number.value = '';
}


$form.addEventListener('submit',handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData($form);
    const number = form.get('number');
    const name = form.get('name');
    const id = number || name; 
    setPokemon(id);
}