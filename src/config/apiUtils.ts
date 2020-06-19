const defaultUri = 'https://pokeapi.co/api/v2/';

interface ApiUtils{
    baseUri: string,
    endpoints:{
        type: string,
        pokemon: string,
        generation: string
    }
}

export const apiUtils: ApiUtils = {
    baseUri: defaultUri,
    endpoints:{
        type: 'type/',
        pokemon: 'pokemon/',
        generation: 'generation/'
    }
}