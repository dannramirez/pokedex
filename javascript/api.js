const BASE_API = "https://pokeapi.co/api/v2";

async function getPokemon(id) {
    try {
        const response = await fetch(`${BASE_API}/pokemon/${id}/`);
        if (response.status !== 200) {
            return await {
                sprites: {
                    front_default: "../images/pokeball.svg"
                },
                name: "No existe",
                id: 0
            };
        } else {
            return await response.json();
        }
    } catch (err) {
        error => console.log('error', error);
    }
}

async function getSpecies(id) {
    try {
        const response = await fetch(`${BASE_API}/pokemon-species/${id}/`);
        if (response.status !== 200) {
            return await {
                flavor_text_entries: [{
                    flavor_text: "Pokemon no encontrado, intenta con otro!!",
                    language: {
                        name: "es"
                    }
                }]
            };
        } else {
            return await response.json();
        }
    } catch (err) {
        error => console.log('error', error);
    }
}

export {
    getPokemon,
    getSpecies
};