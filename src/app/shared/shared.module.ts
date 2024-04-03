import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TypeBadgeComponent } from './components/type-badge/type-badge.component';

import { IdToStringPipe } from './pipes/string-id-pipe';

@NgModule({
    imports: [ButtonComponent, DropdownComponent, TypeBadgeComponent, IdToStringPipe],
    exports: [ButtonComponent, DropdownComponent, TypeBadgeComponent, IdToStringPipe],
})
export class SharedModule {}
