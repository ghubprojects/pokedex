import { NgFor } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PokeListItem } from '@core/interfaces/ui-model/list-item';
import { TypeBadgeComponent } from '@shared/components/type-badge/type-badge.component';

@Component({
    selector: 'app-poke-item',
    standalone: true,
    imports: [NgFor, RouterLink, TypeBadgeComponent],
    templateUrl: './poke-item.component.html',
    styleUrl: './poke-item.component.scss',
})
export class PokeItemComponent {
    @Input() pokemon!: PokeListItem;
}
