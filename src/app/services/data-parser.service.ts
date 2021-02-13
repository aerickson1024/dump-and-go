import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {
  characters :Array<Array<string>>;

  constructor() {
    this.characters = new Array<Array<string>>();
  }

  prepareData(dump: string) {
    return new Promise((resolve, reject) => {
      try {
        let charDump = dump.split('\r\n');
      
        charDump.forEach((character: string) => {
          this.characters.push(character.split('\t'));
        });
  
        resolve(this.characters);  
      } catch {
        reject('Error parsing character dump');
      }
    });
  }
}
