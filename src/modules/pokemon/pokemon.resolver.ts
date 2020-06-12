import PokeAPI from '../../datasource/pokeapi';

export default {
    Query: {
        pokemon: (_:any,{id}, context) => context.injector.get(PokeAPI).getPokemon(id),
    }
}