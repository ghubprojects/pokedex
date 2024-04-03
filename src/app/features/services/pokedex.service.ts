import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, shareReplay } from 'rxjs';

import { PokeListItem } from '@features/pokedex/models/list-item';

@Injectable({
    providedIn: 'root',
})
export class PokedexService {
    private path = 'assets/data/poke-list.json';

    constructor(private http: HttpClient) {}

    get pokemons$() {
        return this.http.get<PokeListItem[]>(this.path).pipe(shareReplay(1));
    }

    getPagingPokemons(limit: number, offset: number) {
        return this.pokemons$.pipe(
            map((pokemons) => {
                // Remove duplicates based on id
                const uniquePokemons = Array.from(new Set(pokemons.map((poke) => poke.id)))
                    .map((id) => pokemons.find((poke) => poke.id === id))
                    .filter((poke): poke is PokeListItem => poke !== undefined);

                // Slice the unique Pokemon array
                return uniquePokemons.slice(offset, offset + limit);
            }),
            shareReplay(1),
        );
    }

    getPokemon(slug: string): Observable<PokeListItem> {
        return this.pokemons$.pipe(
            map((pokemons) => pokemons.find((x) => x.name.toLowerCase() === slug.toLowerCase())),
            filter((x): x is PokeListItem => x !== undefined),
        );
    }
}
