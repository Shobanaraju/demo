import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})


export class DemoPipePipe implements PipeTransform {
  nValue!:string
  transform(value: any, ...args: unknown[]): unknown {


     this.nValue= value.split("").reverse().join("")
    return this.nValue.toUpperCase();
  }

}
