import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyFormat',
    standalone: false
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
  }
}
