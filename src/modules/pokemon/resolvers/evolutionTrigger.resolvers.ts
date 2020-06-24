import PokeAPI from '../../../datasource/pokeapi';

const triggerResolver = {
    Query: {
        evolutionTrigger: (_,{id}, {injector}) => injector.get(PokeAPI).getEvolutionTrigger(id),
    }
}

export default triggerResolver;