import { Pipe, PipeTransform } from '@angular/core';
// import { format } from 'date-fns'; // Using date-fns for formatting

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date, formatStr: string = 'dd/MM/yyyy'): string {
    return ''
    // return format(new Date(value), formatStr);
  }
}
