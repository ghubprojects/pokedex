import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { EvolutionChain } from '@core/models/evolution/evolution-chain';

@Injectable({
    providedIn: 'root',
})
export class EvolutionChainService {
    baseUrl: string;
    endpoint: string = 'evolution-chain';

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/${this.endpoint}`;
    }

    getEvolutionChainById(id: number): Observable<EvolutionChain> {
        return this.http.get<EvolutionChain>(`${this.baseUrl}/${id}`);
    }

    getEvolutionChainByUrl(url: string): Observable<EvolutionChain> {
        return this.http.get<EvolutionChain>(url);
    }
}
