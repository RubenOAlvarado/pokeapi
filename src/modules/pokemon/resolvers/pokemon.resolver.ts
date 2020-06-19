import PokeAPI from '../../../datasource/pokeapi';

export default {
    Query: {
        pokemon: (_,{id}, {injector}) => injector.get(PokeAPI).getPokemon(id),
    }
}