import PokeAPI from '../../../datasource/pokeapi';

const formsResolver = {
    Query: {
        forms: (_,{id}, {injector}) => injector.get(PokeAPI).getForms(id),
    }
}

export default formsResolver;