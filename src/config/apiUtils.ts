const defaultUri = 'https://pokeapi.co/api/v2/';

interface ApiUtils{
    baseUri: string,
    endpoints:{
        type: string,
        pokemon: string,
        generation: string
        ability: string,
        evolution_chain: string,
        evolution_trigger: string,
        form: string
    }
}

export const apiUtils: ApiUtils = {
    baseUri: defaultUri,
    endpoints:{
        type: 'type/',
        pokemon: 'pokemon/',
        generation: 'generation/',
        ability: 'ability/',
        evolution_chain: 'evolution-chain/',
        evolution_trigger: 'evolution-trigger/',
        form: 'pokemon-form/'
    }
}