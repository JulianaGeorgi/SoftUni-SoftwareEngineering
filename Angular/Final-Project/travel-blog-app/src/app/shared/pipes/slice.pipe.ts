import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})

// if text is longer then the maxCharCount, slice text after the last word
export class SlicePipe implements PipeTransform {

  transform(value: string, maxCharCount = 100, completeWords = true, ellipsis = '...'): unknown {
    if (value.length > maxCharCount) {
      maxCharCount = value.substring(0, maxCharCount).lastIndexOf(' ');
    }
    return value.length > maxCharCount ? value.substring(0, maxCharCount) + ellipsis : value;
  }
}
