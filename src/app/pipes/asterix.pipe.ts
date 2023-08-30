import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
  
  transform(ch ) {
  let voyels = ["a","e","i","o","u","y"];
  let v ="";
    for (let i = 0; i < ch.length; i++) {
      for (let j = 0; j < voyels.length; j++) {
        if (ch[i]==voyels[j]){
          v = v + "*" ;
          i++
          break;
      }
     }
    v = v+ch[i]
     }
     return v 
  // return ch.replace(/AEOUIYaeuioy/*)
    }

  }


