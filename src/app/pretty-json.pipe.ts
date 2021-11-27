import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJson'
})
export class PrettyJsonPipe implements PipeTransform {

  /**
   * @param value A value of any type to convert into a JSON-format string.
   */
   transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
