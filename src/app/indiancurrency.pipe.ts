import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indiancurrency'
})
export class IndiancurrencyPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    });

    return formatter.format(Number(value));
  }
}
