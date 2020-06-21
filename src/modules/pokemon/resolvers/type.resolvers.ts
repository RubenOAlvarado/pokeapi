import PokeAPI from '../../../datasource/pokeapi';

const typeResolver = {
    Query: {
        type: (_,{id}, {injector}) => injector.get(PokeAPI).getType(id),
    },
    Pokemon:{
        name: pokemon => pokemon.name||pokemon.pokemon.name,
        slot: pokemon => pokemon.slot,
        url: pokemon => pokemon.pokemon.url
    }
}

export default typeResolver;