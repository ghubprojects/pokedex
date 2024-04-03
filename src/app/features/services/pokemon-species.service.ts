import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { PokemonSpecies } from '@core/models/groups/pokemon-species';

@Injectable({
    providedIn: 'root',
})
export class PokemonSpeciesService {
    baseUrl: string;
    endpoint = 'pokemon-species';

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/${this.endpoint}`;
    }

    getPokemonSpeciesBySlug(slug: number | string | null): Observable<PokemonSpecies> {
        return this.http.get<PokemonSpecies>(`${this.baseUrl}/${slug}`);
    }
}
