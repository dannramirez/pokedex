const BASE_API = "https://pokeapi.co/api/v2";

async function getPokemon(id) {
    try {
        const response = await fetch(`${BASE_API}/pokemon/${id}/`);
        return await response.json();
    } catch (err) {
        error => console.log('error', error)
    }

    return data;
}

async function getSpecies(id) {
    try {
        const response = await fetch(`${BASE_API}/pokemon-species/${id}/`);
        return await response.json();

    } catch (err) {
        error => console.log('error', error)
        return;
    }

    
}

export { getPokemon, getSpecies};