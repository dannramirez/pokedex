const BASE_API = "https://pokeapi.co/api/v2";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

async function getPokemon(id) {
    try {
        const response = await fetch(`${BASE_API}/pokemon/${id}/`, requestOptions);
        return await response.json();
    } catch (err) {
        error => console.log('error', error)
    }

    return data;
}

async function getSpecies(id) {
    try {
        const response = await fetch(`${BASE_API}/pokemon-species/${id}/`, requestOptions);
        return await response.json();

    } catch (err) {
        error => console.log('error', error)
    }

    
}

export { getPokemon, getSpecies};