import { Component } from '@angular/core';
import { DataParserService } from 'src/app/services/data-parser.service';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.less']
})
export class DropZoneComponent {
  characters: Array<Array<string>>;

  constructor(private dps: DataParserService) {
    this.characters = new Array<Array<string>>();
  }

  async incomingGuildData(dump: string) {
    console.log('data dump received');
    this.characters = await this.dps.prepareData(dump) as Array<Array<string>>;
    console.table(this.characters);
  }
}