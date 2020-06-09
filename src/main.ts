import { ApolloServer } from 'apollo-server';

//load the environment config
import { environment } from './config/environment';

const server = new ApolloServer({});

server.listen(environment.port)
        .then(({url}) => console.log(`Server ready at ${url}`));

if(module.hot){
    module.hot.accept();
    module.hot.dispose(async () => {
        server.stop();
    });
}