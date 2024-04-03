import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PokeListItem } from '@features/pokedex/models/list-item';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-poke-item',
    standalone: true,
    imports: [CommonModule, RouterModule, SharedModule],
    templateUrl: './poke-item.component.html',
    styleUrl: './poke-item.component.scss',
})
export class PokeItemComponent {
    @Input() pokemon!: PokeListItem;
}
