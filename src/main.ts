import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';

//load the environment config
import { environment } from './config/environment';
import { PokemonModule } from './modules/pokemon';

const server = new ApolloServer({
    schema: PokemonModule.schema,
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