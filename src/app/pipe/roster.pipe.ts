import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../class/character';

@Pipe({
  name: 'roster'
})
export class RosterPipe implements PipeTransform {

  transform(characters: Array<Character>, ...args: boolean[]): Array<Character> {
    if (args) {
      let filteredCharacters = new Array<Character>();

      characters.forEach((character: Character) => {
        if (args[0] && (character.note.toLowerCase() == 'main' || character.note.toLowerCase().includes('main '))) filteredCharacters.push(character);
        else if (args[1] && (character.note.includes('*') || character.note.toLowerCase().includes('mainalt'))) filteredCharacters.push(character);
        else if (
          args[2] && 
          character.note.toLowerCase() != character.name.toLowerCase() && 
          character.note.toLowerCase() != 'main' &&
          !character.note.toLowerCase().includes('main ') &&
          !character.note.includes('*') &&
          !character.note.toLowerCase().includes('mainalt')) filteredCharacters.push(character);
      });

      return filteredCharacters;
    }

    return characters;
  }

}
