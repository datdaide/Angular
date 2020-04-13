import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultWhenNull'
})
export class DefaultWhenNullPipe implements PipeTransform {

  transform(value: any, defaultValue ?: any): any {
    defaultValue = (defaultValue === null || defaultValue === undefined) ? "Unknown" : defaultValue;
    
    return (value === null || value === undefined) 
        ? defaultValue
        : value;
  }

}
