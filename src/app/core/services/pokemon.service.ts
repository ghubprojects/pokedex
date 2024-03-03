import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '@core/interfaces/groups/pokemon/pokemon';
import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    baseUrl: string;
    endpoint: string = 'pokemon';

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/${this.endpoint}`;
    }

    getPokemonById(id: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.baseUrl}/${id}`);
    }

    getPokemonByUrl(url: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }
}
