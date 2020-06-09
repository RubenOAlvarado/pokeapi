export default {
    Query: {
        pokemon: (_:any,{id}:any, {dataSources}:any) => dataSources.pokeAPI.getPokemon(id),
    }
}