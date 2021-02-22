import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from '../class/character';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {
  private characters :Array<Character>;
  dataDump: Subject<string>;

  constructor() {
    this.dataDump = new Subject<string>();
    this.characters = new Array<Character>();
  }

  prepareData(dump: string) {
    return new Promise((resolve, reject) => {
      try {
        let charDump = dump.split('\r\n');
      
        charDump.forEach((characterString: string) => {
          let charBits = characterString.split('\t');
          let character = new Character(charBits[0], parseInt(charBits[1]), charBits[2], charBits[3], charBits[7]);

          if (character.name) this.characters.push(character);
        });

        resolve(this.characters);  
      } catch {
        reject('Error parsing character dump');
      }
    });
  }

  formatForClipboard(filteredCharacters: Array<Character>): string {
    console.log('inside clipboard function');
    let stringBuilder = '';

    filteredCharacters.reduce((stringBuild: string, character: Character) => {
      return stringBuilder = stringBuilder.concat(`${character.name}\r\n`);
    }, stringBuilder);

    return stringBuilder;
  }

  clearData() {
    console.log('data cleared');
    this.characters = new Array<Character>();
  }
}
