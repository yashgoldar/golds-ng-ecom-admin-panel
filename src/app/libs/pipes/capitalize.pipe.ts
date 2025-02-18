import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize',
    standalone: false
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\b\w/g, char => char.toUpperCase());
  }
}
