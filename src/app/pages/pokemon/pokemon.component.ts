import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '@core/services/pokedex.service';
import { Subscription } from 'rxjs';
import { PokeListItem } from './../../core/interfaces/ui-model/list-item';
import { EvolutionChainService } from './../../core/services/evolution-chain.service';

import {
    ChainLink,
    EvolutionChain,
    Pokemon,
    PokemonSpecies,
    PokemonSpeciesVariety,
} from '@core/interfaces';

import { PokemonSpeciesService } from '@core/services/pokemon-species.service';
import { PokemonService } from '@core/services/pokemon.service';
import { EvolutionStageComponent } from '@modules/evolution-stage/evolution-stage.component';
import { IdToStringPipe } from '@shared/pipes/string-id-pipe';

@Component({
    selector: 'app-pokemon',
    standalone: true,
    imports: [NgFor, NgIf, TitleCasePipe, IdToStringPipe, EvolutionStageComponent],
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit, OnDestroy {
    private routeSub!: Subscription;

    pokemonId!: number;
    pokemonSpeciesData!: PokemonSpecies;
    pokemonData!: Pokemon;
    currentVariety?: PokemonSpeciesVariety;

    evolutionChain: PokeListItem[] = [];

    constructor(
        private route: ActivatedRoute,
        private pokemonSpeciesService: PokemonSpeciesService,
        private pokemonService: PokemonService,
        private evolutionChainService: EvolutionChainService,
        private pokedexService: PokedexService,
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.pokemonId = params['id'];
        });

        this.pokemonSpeciesService.getPokemonSpeciesById(this.pokemonId).subscribe((data: any) => {
            this.pokemonSpeciesData = data;
            console.log(this.pokemonSpeciesData);
            this.currentVariety = this.pokemonSpeciesData.varieties.find((item) => item.is_default);
            this.loadVariety();
            this.loadEvolutionChain();
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    changeVariety(variety: PokemonSpeciesVariety) {
        this.currentVariety = variety;
        this.loadVariety();
    }

    loadVariety() {
        if (this.currentVariety) {
            this.pokemonService
                .getPokemonByUrl(this.currentVariety.pokemon.url)
                .subscribe((data: any) => {
                    this.pokemonData = data;
                    console.log(this.pokemonData);
                });
        }
    }

    loadEvolutionChain() {
        if (this.pokemonSpeciesData) {
            this.evolutionChainService
                .getEvolutionChainByUrl(this.pokemonSpeciesData.evolution_chain.url)
                .subscribe((data: EvolutionChain) => {
                    this.buildEvolutionChain(data.chain);
                });
        }
    }

    buildEvolutionChain(chain: ChainLink): void {
        if (chain.species.name)
            this.pokedexService.getPokemonByName(chain.species.name).subscribe((data: any) => {
                this.evolutionChain.push(data);
                console.log(this.evolutionChain);

                if (chain.evolves_to.length > 0) {
                    this.buildEvolutionChain(chain.evolves_to[0]);
                }
            });
    }
}
