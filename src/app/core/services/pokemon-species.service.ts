import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { PokemonSpecies } from '@core/interfaces';

@Injectable({
    providedIn: 'root',
})
export class PokemonSpeciesService {
    baseUrl: string;
    endpoint: string = 'pokemon-species';

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/${this.endpoint}`;
    }

    getPokemonSpeciesById(id: number): Observable<PokemonSpecies> {
        return this.http.get<PokemonSpecies>(`${this.baseUrl}/${id}`);
    }
}
