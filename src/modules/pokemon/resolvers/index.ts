import { mergeResolvers } from '@graphql-tools/merge';
import resolver from './pokemon.resolvers';
import abilityResolver from './ability.resolvers';
import genResolver from './generation.resolvers';
import typeResolver from './type.resolvers';

const resolversArray = [resolver, abilityResolver, genResolver, typeResolver];
export const resolvers = mergeResolvers(resolversArray);