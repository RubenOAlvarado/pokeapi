import { GraphQLModule } from '@graphql-modules/core';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import PokeAPI from '../../datasource/pokeapi';
import * as pokeDefs from './schemas/pokemon.graphql';
import * as pokeTypeDefs from './schemas/pokeType.graphql';
import * as genTypes from './schemas/generation.graphql';
import resolver from './resolvers/pokemon.resolver';
import typeResolver from './resolvers/type.resolver';
import genResolver from './resolvers/generation.resolver';

const typeDefs = mergeTypeDefs([pokeDefs, pokeTypeDefs, genTypes]);
const resolvers = mergeResolvers([resolver, typeResolver, genResolver]);

export const PokemonModule = new GraphQLModule({
    providers: [PokeAPI],
    typeDefs,
    resolvers
});