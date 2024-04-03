import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

import { SharedModule } from '@shared/shared.module';

import { ChainLink } from '@core/models/evolution/chain-link';
import { EvolutionChain } from '@core/models/evolution/evolution-chain';
import { Pokemon } from '@core/models/groups/pokemon';
import { PokemonSpecies, PokemonSpeciesVariety } from '@core/models/groups/pokemon-species';

import { EvolutionStageComponent } from '@features/pokedex/components/evolution-stage/evolution-stage.component';
import { PokeListItem } from '@features/pokedex/models/list-item';

import { EvolutionChainService } from '@features/services/evolution-chain.service';
import { PokedexService } from '@features/services/pokedex.service';
import { PokemonSpeciesService } from '@features/services/pokemon-species.service';
import { PokemonService } from '@features/services/pokemon.service';

@Component({
    selector: 'app-pokemon',
    standalone: true,
    imports: [CommonModule, RouterModule, SharedModule, EvolutionStageComponent],
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit {
    pokemonSpecies$!: Observable<PokemonSpecies>;
    pokemonData!: Pokemon;

    pokemonSpeciesData!: PokemonSpecies;
    currentVariety?: PokemonSpeciesVariety;
    evolutionChain: PokeListItem[] = [];

    constructor(
        private route: ActivatedRoute,
        private pokemonSpeciesService: PokemonSpeciesService,
        private pokemonService: PokemonService,
        private evolutionChainService: EvolutionChainService,
        private pokedexService: PokedexService,
    ) {}

    ngOnInit(): void {
        this.pokemonSpecies$ = this.route.paramMap.pipe(
            map((params) => params.get('slug')),
            switchMap((slug) => this.pokemonSpeciesService.getPokemonSpeciesBySlug(slug)),
        );

        this.pokemonSpecies$.subscribe((data: any) => {
            this.pokemonSpeciesData = data;
            this.currentVariety = this.pokemonSpeciesData.varieties.find((item) => item.is_default);
            this.loadVariety();
            this.evolutionChain = [];
            this.loadEvolutionChain();
        });
    }

    handleSelectionChange(value: any) {
        console.log('Selected value:', value);
        // Do something with the selected value
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
            this.pokedexService.getPokemon(chain.species.name).subscribe((data: any) => {
                this.evolutionChain.push(data);

                if (chain.evolves_to.length > 0) {
                    this.buildEvolutionChain(chain.evolves_to[0]);
                }
            });
    }
}
