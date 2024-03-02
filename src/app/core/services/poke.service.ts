import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';

@Injectable({
    providedIn: 'root',
})
export class PokeService {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiUrl;
    }

    getListPoke(): Observable<any> {
        return this.http.get('assets/data/poke-list.json');
    }
}
