import PokeAPI from '../../../datasource/pokeapi';

const chainResolver = {
    Query: {
        evolutionChain: (_,{id}, {injector}) => injector.get(PokeAPI).getEvolutionChain(id),
    }
}

export default chainResolver;