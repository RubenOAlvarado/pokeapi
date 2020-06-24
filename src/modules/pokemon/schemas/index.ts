import { mergeTypeDefs } from '@graphql-tools/merge';
import * as pokeDefs from './pokemon.graphql';
import * as pokeTypeDefs from './pokeType.graphql';
import * as abilityDefs from './ability.graphql';
import * as genertionDefs from './generation.graphql';
import * as nameDefs from './names.graphql';
import * as chainDefs from './evolutionChain.graphql';
import * as triggersDefs from './evolutionTriggers.graphql';
import * as genericDefs from './generic.graphql';
import * as formDefs from './pokemonForm.graphql';
import * as spritesDefs from './sprites.graphql';
import * as movesDefs from './moves.graphql';

const schemas = [pokeDefs, pokeTypeDefs, abilityDefs, genertionDefs, nameDefs,
                 chainDefs, triggersDefs, genericDefs, formDefs, spritesDefs, movesDefs];

export const typeDefs = mergeTypeDefs(schemas);