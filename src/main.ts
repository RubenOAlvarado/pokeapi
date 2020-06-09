import { ApolloServer } from 'apollo-server';

//load the environment config
import { environment } from './config/environment';
import * as typeDefs from './modules/pokemon.graphql';
import resolvers from './modules/pokemon.resolver';
import PokeAPI from './datasource/pokeapi';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        pokeAPI: new PokeAPI(),
    }),
    introspection: environment.apollo.introspection,
    playground: environment.apollo.introspection
});

server.listen(environment.port)
        .then(({url}) => console.log(`Server ready at ${url}`));

if(module.hot){
    module.hot.accept();
    module.hot.dispose(async () => {
        server.stop();
    });
}