import PokeAPI from '../../../datasource/pokeapi';

const abilityResolver = {
    Query: {
        ability: (_,{id}, {injector}) => injector.get(PokeAPI).getAbility(id),
    }
}

export default abilityResolver;