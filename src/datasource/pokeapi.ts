import { RESTDataSource } from 'apollo-datasource-rest';

class PokeAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/';
    }

    async getPokemon(id:number){
        const response = await this.get(`pokemon/${id}`);
        return response;
    }
}

export default PokeAPI;