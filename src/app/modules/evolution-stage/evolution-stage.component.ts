import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { PokeListItem } from '@core/interfaces/ui-model/list-item';
import { TypeBadgeComponent } from '@shared/components/type-badge/type-badge.component';
import { IdToStringPipe } from '@shared/pipes/string-id-pipe';

@Component({
    selector: 'app-evolution-stage',
    standalone: true,
    imports: [NgFor, RouterLink, TitleCasePipe, IdToStringPipe, TypeBadgeComponent, RouterOutlet],
    templateUrl: './evolution-stage.component.html',
    styleUrl: './evolution-stage.component.scss',
})
export class EvolutionStageComponent {
    @Input() pokemon!: PokeListItem;
}
