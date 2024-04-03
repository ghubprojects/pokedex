import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';

import { PokedexService } from '@features/services/pokedex.service';
import { SharedModule } from '@shared/shared.module';
import { PokeItemComponent } from './components/poke-item/poke-item.component';
import { PokeListItem } from './models/list-item';

@Component({
    selector: 'app-pokedex',
    standalone: true,
    imports: [CommonModule, RouterModule, SharedModule, PokeItemComponent],
    templateUrl: './pokedex.component.html',
    styleUrl: './pokedex.component.scss',
    providers: [PokedexService],
})
export class PokedexComponent implements OnInit {
    limit = 12;
    offset = 0;
    pokemons$: Observable<PokeListItem[]> = of<PokeListItem[]>([]);
    pokemons: PokeListItem[] = [];
    loading = false;

    constructor(private readonly pokedexService: PokedexService) {}

    ngOnInit(): void {
        this.pokemons$ = of({ limit: this.limit, offset: this.offset }).pipe(
            tap(() => (this.pokemons = [])), // Clear the pokemons array
            switchMap(({ limit, offset }) => this.pokedexService.getPagingPokemons(limit, offset)),
            tap((pokemons) => this.pokemons.push(...pokemons)),
        );
    }

    loadMore(): void {
        this.offset += this.limit;
        this.pokemons$ = of({ limit: this.limit, offset: this.offset }).pipe(
            switchMap(({ limit, offset }) => this.pokedexService.getPagingPokemons(limit, offset)),
            tap((pokemons) => this.pokemons.push(...pokemons)),
        );
    }
}
