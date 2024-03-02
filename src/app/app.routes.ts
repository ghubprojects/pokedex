import { Routes } from '@angular/router';
import { PageNotFoundComponent, PokedexComponent, PokemonComponent } from './pages';

export const routes: Routes = [
    {
        path: 'pokedex',
        component: PokedexComponent,
    },
    {
        path: 'pokedex/pokemon',
        component: PokemonComponent,
    },
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
