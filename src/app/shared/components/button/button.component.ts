import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
    @Input() colorSchema = 'black';
    @Input() disabled: boolean = false;

    @Output() onClick = new EventEmitter<Event>();

    ngOnInit(): void {}

    handleClick() {
        if (!this.disabled) {
            this.onClick.emit();
        }
    }
}
