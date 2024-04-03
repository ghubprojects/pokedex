import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'pokedex',
        // component: MainLayoutComponent,
        loadChildren: () => import('./features/pokedex/pokedex.routes').then((x) => x.pokedexRoutes),
    },
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
