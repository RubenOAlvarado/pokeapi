import PokeAPI from '../../../datasource/pokeapi';

const typeResolver = {
    Query: {
        type: (_,{id}, {injector}) => injector.get(PokeAPI).getType(id),
    }
}

export default typeResolver;