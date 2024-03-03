import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, find, map } from 'rxjs';

import { PokeListItem } from '@core/interfaces';

@Injectable({
    providedIn: 'root',
})
export class PokedexService {
    constructor(private http: HttpClient) {}

    getListPoke(): Observable<any> {
        return this.http.get('assets/data/poke-list.json');
    }

    getPokemonByName(name: string): Observable<PokeListItem | undefined> {
        return this.http
            .get<PokeListItem[]>('assets/data/poke-list.json')
            .pipe(
                map((data: PokeListItem[]) =>
                    data.find((item) => item.name.toLowerCase() === name.toLowerCase()),
                ),
            );
    }
}
