import { setPokemon } from "./pokedex.js";

const $form1 = document.querySelector('#form1');
const $form2 = document.querySelector('#form2');

$form1.addEventListener('submit',handleSubmit);
$form2.addEventListener('submit',handleSubmit);


async function handleSubmit(event) {
    event.preventDefault();
    const form1 = new FormData($form1);
    const form2 = new FormData($form2);
    const number = form1.get('number');
    const name = form2.get('name').toLowerCase();
    const id = number || name; 
    setPokemon(id);
}