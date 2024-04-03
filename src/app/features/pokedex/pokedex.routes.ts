import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';

export const pokedexRoutes: Routes = [
    {
        path: '',
        component: PokedexComponent,
    },
    {
        path: ':slug',
        loadChildren: () => import('./pages/pokemon/pokemon.routes').then((x) => x.pokemonRoutes),
    },
];
