import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';

import { PokeapiService } from '../../services/pokeapi';

import { PokemonDetail } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

  data!: PokemonDetail;

  loading: boolean = false;

  o!: Observable<PokemonDetail>;

  constructor(
    private route: ActivatedRoute,
    public pokeService: PokeapiService
  )
  {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let name = params.get('name');

    if(name)
    {
      this.getPokemon(name);
    }
  }

  getPokemon(name: string): void
  {
    this.loading = true;

    this.o = this.pokeService.getPokemonDetail(name);

    this.o.subscribe(this.getData);
  }

  getData = (d: PokemonDetail) =>
  {
    this.data = d;

    this.loading = false;
  }

}