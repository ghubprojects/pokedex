import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BadgeType } from '@core/enums/enum';

@Component({
    selector: 'app-type-badge',
    standalone: true,
    imports: [TitleCasePipe],
    templateUrl: './type-badge.component.html',
    styleUrl: './type-badge.component.scss',
})
export class TypeBadgeComponent implements OnInit {
    @Input() type!: string;
    @Input() size: BadgeType = BadgeType.MEDIUM;
    @Input() bordered: boolean = false;

    classList!: string[];

    ngOnInit(): void {
        this.classList = [`bg-color-${this.type}`, `size-${this.size}`];
        if (this.bordered) this.classList.push('bordered');
        console.log(this.classList);
    }
}
