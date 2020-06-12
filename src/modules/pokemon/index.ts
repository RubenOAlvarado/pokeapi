import { GraphQLModule } from '@graphql-modules/core';
import PokeAPI from '../../datasource/pokeapi';
import * as typeDefs from './pokemon.graphql';
import resolver from './pokemon.resolver';

export const PokemonModule = new GraphQLModule({
    providers: [PokeAPI],
    typeDefs,
    resolvers: resolver
});