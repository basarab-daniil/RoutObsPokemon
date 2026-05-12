import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {
  PokemonTypeResponse,
  PokemonByTypeResponse,
  PokemonDetail
} from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(public http: HttpClient)
  {

  }

  getTypes(): Observable<PokemonTypeResponse>
  {
    return this.http.get<PokemonTypeResponse>(
      `${this.baseUrl}/type`
    );
  }

  getPokemonByType(type: string): Observable<PokemonByTypeResponse>
  {
    return this.http.get<PokemonByTypeResponse>(
      `${this.baseUrl}/type/${type}`
    );
  }

  getPokemonDetail(name: string): Observable<PokemonDetail>
  {
    return this.http.get<PokemonDetail>(
      `${this.baseUrl}/pokemon/${name}`
    );
  }

}