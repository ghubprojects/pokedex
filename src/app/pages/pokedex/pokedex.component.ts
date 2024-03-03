import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PokedexService } from '@core/services/pokedex.service';
import { PokeItemComponent } from '@modules/poke-item/poke-item.component';

@Component({
    selector: 'app-pokedex',
    standalone: true,
    imports: [NgFor, PokeItemComponent],
    templateUrl: './pokedex.component.html',
    styleUrl: './pokedex.component.scss',
    providers: [PokedexService],
})
export class PokedexComponent implements OnInit {
    pokemonData = [];
    pokemons = [];
    limit = 12;
    offset = 0;

    constructor(private pokedexService: PokedexService) {}

    loadData(): void {
        this.pokedexService.getListPoke().subscribe((data: any) => {
            this.pokemonData = getDistinctDataById(data);
            this.pokemons = this.pokemonData.slice(this.offset, this.offset + this.limit);
            this.offset += this.limit;
        });
    }

    ngOnInit(): void {
        this.loadData();
    }

    loadMore(): void {
        const moreData = this.pokemonData.slice(this.offset, this.offset + this.limit);
        this.pokemons.push(...moreData);
        this.offset += this.limit;
    }
}

function getDistinctDataById(data: any) {
    return data.reduce((uniqueData: any, currentData: any) => {
        const exists = uniqueData.find((data: any) => data.id === currentData.id);
        if (!exists) uniqueData.push(currentData);
        return uniqueData;
    }, []);
}
