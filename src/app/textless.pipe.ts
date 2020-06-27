import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textless'
})
export class TextlessPipe implements PipeTransform {

  transform(title:string): unknown {
    return title.slice(0,10) + "....";
  }

}
