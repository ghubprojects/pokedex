import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { Pokemon } from '@core/models/groups/pokemon';

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
