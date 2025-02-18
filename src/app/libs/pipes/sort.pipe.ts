import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
    standalone: false
})
export class SortPipe implements PipeTransform {
  transform(array: any[], key: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array || !key) return array;
    return array.sort((a, b) => order === 'asc' ? a[key] - b[key] : b[key] - a[key]);
  }
}
