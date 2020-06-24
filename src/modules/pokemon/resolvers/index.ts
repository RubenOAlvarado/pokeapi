import { mergeResolvers } from '@graphql-tools/merge';
import resolver from './pokemon.resolvers';
import abilityResolver from './ability.resolvers';
import genResolver from './generation.resolvers';
import typeResolver from './type.resolvers';
import chainResolver from './evolutionChain.resolvers';
import triggerResolver from './evolutionTrigger.resolvers';
import formsResolver from './forms.resolvers';

const resolversArray = [resolver, abilityResolver, genResolver, typeResolver, chainResolver, triggerResolver, formsResolver];
export const resolvers = mergeResolvers(resolversArray);