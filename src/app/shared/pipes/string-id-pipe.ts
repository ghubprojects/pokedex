import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'stringId',
})
export class IdToStringPipe implements PipeTransform {
    transform(id: number | null | undefined): string {
        // Assuming the desired format is '#0000' padded with leading zeros
        return '#' + ('0000' + id).slice(-4);
    }
}
