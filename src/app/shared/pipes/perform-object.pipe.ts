import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'performObject'
})
export class PerformObjectPipe implements PipeTransform {

  transform(value: any, performTextKey?: string): any {
    return !performTextKey ? value : value[performTextKey]; 
  }

}
