import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnInit {
    @Input() options: { value: any; label: string }[] = [];
    @Output() selectionChange = new EventEmitter<any>();

    selectedOption: { value: any; label: string } | undefined;
    isOpen = false;

    ngOnInit(): void {}

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    selectOption(option: { value: any; label: string }) {
        this.selectedOption = option;
        this.selectionChange.emit(option.value);
        this.isOpen = false;
    }
}
