import { Routes } from '@angular/router';

import { TypesComponent } from './components/types/types.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'types',
        pathMatch: 'full'
    },

    {
        path: 'types',
        component: TypesComponent
    },

    {
        path: 'type/:name',
        component: PokemonListComponent
    },

    {
        path: 'pokemon/:name',
        component: PokemonDetailComponent
    }
];