import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { PokeapiService } from '../../services/pokeapi.service';

import {
  PokemonType,
  PokemonTypeResponse
} from '../../models/pokemon';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent implements OnInit {

  data!: PokemonTypeResponse;

  loading: boolean = false;

  o!: Observable<PokemonTypeResponse>;

  constructor(public pokeService: PokeapiService)
  {

  }

  ngOnInit(): void
  {
    this.getTypes();
  }

  getTypes(): void
  {
    this.loading = true;

    this.o = this.pokeService.getTypes();

    this.o.subscribe(this.getData);
  }

  getData = (d: PokemonTypeResponse) =>
  {
    this.data = d;

    this.loading = false;
  }

}