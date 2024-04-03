import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PokeListItem } from '@features/pokedex/models/list-item';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-evolution-stage',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './evolution-stage.component.html',
    styleUrl: './evolution-stage.component.scss',
})
export class EvolutionStageComponent {
    @Input() pokemon!: PokeListItem;

    constructor(private router: Router) {}

    navigateToPokemonPage(): void {
        this.router.navigate(['/pokedex', this.pokemon.id]);
    }
}
