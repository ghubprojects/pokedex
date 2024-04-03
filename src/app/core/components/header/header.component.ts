import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

    ngOnInit(): void { }

}
