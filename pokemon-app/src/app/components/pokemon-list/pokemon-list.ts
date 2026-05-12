import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { PokeapiService } from '../../services/pokeapi';

import {
  PokemonByTypeResponse
} from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  data!: PokemonByTypeResponse;

  loading: boolean = false;

  o!: Observable<PokemonByTypeResponse>;

  typeName: string = '';

  constructor(
    private route: ActivatedRoute,
    public pokeService: PokeapiService
  )
  {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let type = params.get('name');

    if(type)
    {
      this.typeName = type;

      this.getPokemon(type);
    }
  }

  getPokemon(type: string): void
  {
    this.loading = true;

    this.o = this.pokeService.getPokemonByType(type);

    this.o.subscribe(this.getData);
  }

  getData = (d: PokemonByTypeResponse) =>
  {
    this.data = d;

    this.loading = false;
  }

}