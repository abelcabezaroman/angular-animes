import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customName'
})
export class CustomNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === "Chainsaw Man") {
      return args[0] + value + args[0]
    } else{
      return value;
    }
  }

}
