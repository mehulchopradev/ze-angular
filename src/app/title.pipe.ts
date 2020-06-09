import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if(value.length) {
      return `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}`;
    }

    return value;
  }

}
