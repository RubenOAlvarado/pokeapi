import PokeAPI from '../../../datasource/pokeapi';

const genResolver = {
    Query: {
        generation: (_,{id}, {injector}) => injector.get(PokeAPI).getGeneration(id),
    }
}

export default genResolver;