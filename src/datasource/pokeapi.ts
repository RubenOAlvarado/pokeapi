import { RESTDataSource } from 'apollo-datasource-rest';
import { Injectable, ProviderScope } from '@graphql-modules/di';
import { apiUtils } from '../config/apiUtils';

@Injectable({
    scope: ProviderScope.Session
})
class PokeAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = apiUtils.baseUri;
    }

    async getPokemon(id:number){
        return await this.get(`${apiUtils.endpoints.pokemon}${id}`);
    }

    async getType(id:number){
        return await this.get(`${apiUtils.endpoints.type}${id}`);
    }

    async getGeneration(id:number){
        return await this.get(`${apiUtils.endpoints.generation}${id}`);
    }
}

export default PokeAPI;