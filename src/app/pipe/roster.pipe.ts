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
        let note = character.note.toLowerCase();
        let name = character.name.toLowerCase();

        if (args[0] && (note == 'main' || (note.includes('main ') && note.includes('/')))) filteredCharacters.push(character);
        else if (args[1] && note.includes('(main box)')) filteredCharacters.push(character);
        else if (args[2] && note.includes('(alt)')) filteredCharacters.push(character);
      });

      return filteredCharacters;
    }

    return characters;
  }

}
