import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DataParserService } from 'src/app/service/data-parser.service';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.less']
})
export class DropZoneComponent {
  constructor(private dps: DataParserService) { }

  async incomingGuildData(dump: string) {
    console.log('data dump received');
    this.dps.dataDump.next(dump);
  }
}