import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPokemon } from '../interfaces/pokemonInterface';

const API_GET_ALL_POKEMONS = environment.API_GET_ALL_POKEMONS;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  createHeader(){
    let headers: HttpHeaders;
      headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .set('Acces-Control-Allow_Origin', '*');
    return headers;
  }

  getAllPokemons(){
    return this.http.get<IPokemon>(API_GET_ALL_POKEMONS);
  }

}
