import {
    setPokemon,
    setPokemonImage
} from "./pokedex.js";

const $pokedex = document.querySelector('#pokedex');
const $form1 = document.querySelector('#form1');
const $form2 = document.querySelector('#form2');

const $navigationRight = document.querySelector('#navigationRight');
const $navigationLeft = document.querySelector('#navigationLeft');
const $navigationUp = document.querySelector('#navigationUp');
const $navigationDown = document.querySelector('#navigationDown');
const $navigationCenter = document.querySelector('#navigationCenter');

const $randomButton = document.querySelector('#randomButton');

$form1.addEventListener('submit', handleSubmit);
$form2.addEventListener('submit', handleSubmit);

$navigationRight.addEventListener('click', nextPokemon);
$navigationLeft.addEventListener('click', prevPokemon);
$navigationUp.addEventListener('click', nextImage);
$navigationDown.addEventListener('click', prevImage);
//$navigationCenter.addEventListener('click', handleSpeech);

$randomButton.addEventListener('click', handleRandom);

let infoActualPokemon = null;

async function handleSubmit(event) {
    event.preventDefault();
    $pokedex.classList.add('is-open');
    const form1 = new FormData($form1);
    const form2 = new FormData($form2);
    const number = form1.get('number');
    const name = form2.get('name').toLowerCase();
    const id = number || name;
    infoActualPokemon = await setPokemon(id);
}

async function handleRandom() {
    $pokedex.classList.add('is-open');
    const id = getRandomArbitrary();
    infoActualPokemon = await setPokemon(id);
}

function getRandomArbitrary() {
    return Math.floor(Math.random() * 898) + 1;
}

async function nextPokemon() {
    const id = (infoActualPokemon === null || [898, 0].includes(infoActualPokemon.id)) ? 1 : infoActualPokemon.id + 1;
    infoActualPokemon = await setPokemon(id);
};

async function prevPokemon() {
    const id = (infoActualPokemon === null || [1, 0].includes(infoActualPokemon.id)) ? 898 : infoActualPokemon.id - 1;
    infoActualPokemon = await setPokemon(id);
};

function nextImage() {
    if (infoActualPokemon !== null) {
        const imageNumber = infoActualPokemon.sprites.length - 1;
        infoActualPokemon.current = ([imageNumber, -1].includes(infoActualPokemon.current)) ? 0 : infoActualPokemon.current + 1;
        setPokemonImage(infoActualPokemon.sprites[infoActualPokemon.current]);
    }else{
        return false;
    }
};

function prevImage() {
    if (infoActualPokemon !== null) {
        const imageNumber = infoActualPokemon.sprites.length - 1;
        infoActualPokemon.current = ([0].includes(infoActualPokemon.current)) ? imageNumber : infoActualPokemon.current - 1;
        setPokemonImage(infoActualPokemon.sprites[infoActualPokemon.current]);
    }else{
        return false;
    }
};

