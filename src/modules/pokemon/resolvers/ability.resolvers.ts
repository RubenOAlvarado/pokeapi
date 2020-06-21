import PokeAPI from '../../../datasource/pokeapi';

const abilityResolver = {
    Query: {
        ability: (_,{id}, {injector}) => injector.get(PokeAPI).getAbility(id),
    },
    Pokemon:{
        name: pokemon => pokemon.name||pokemon.pokemon.name,
        is_hidden: pokemon => pokemon.is_hidden,
        slot: pokemon => pokemon.slot 
    }
}

export default abilityResolver;