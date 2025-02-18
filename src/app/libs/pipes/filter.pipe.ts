import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, key: string): any[] {
    if (!items || !searchTerm) return items;
    return items.filter(item => item[key]?.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
