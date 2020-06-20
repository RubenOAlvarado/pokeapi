import { GraphQLModule } from '@graphql-modules/core';
import PokeAPI from '../../datasource/pokeapi';
import {resolvers} from './resolvers';
import { typeDefs } from './schemas'; 




export const PokemonModule = new GraphQLModule({
    providers: [PokeAPI],
    typeDefs,
    resolvers
});