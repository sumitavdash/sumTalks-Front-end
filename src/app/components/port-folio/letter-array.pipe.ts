import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterArray'
})
export class LetterArrayPipe implements PipeTransform {
  transform(value: string): string[] {
    return value.split('');
  }
}