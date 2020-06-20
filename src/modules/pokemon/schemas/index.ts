import { mergeTypeDefs } from '@graphql-tools/merge';
import * as pokeDefs from './pokemon.graphql';
import * as pokeTypeDefs from './pokeType.graphql';
import * as abilityDefs from './ability.graphql';
import * as genertionDefs from './generation.graphql';
import * as nameDefs from './names.graphql';

const schemas = [pokeDefs, pokeTypeDefs, abilityDefs, genertionDefs, nameDefs];

export const typeDefs = mergeTypeDefs(schemas);