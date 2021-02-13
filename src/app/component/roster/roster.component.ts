import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/class/character';
import { DataParserService } from 'src/app/service/data-parser.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.less']
})
export class RosterComponent implements OnInit {
  characters: Array<Character>;
  checked: boolean;

  constructor(private dps: DataParserService) {
    this.characters = new Array<Character>();
    this.checked = true;
  }

  ngOnInit() {
    this.dps.dataDump.subscribe(async (dump: string) => {
      console.log('roster window accepting dump');
      this.characters = await this.dps.prepareData(dump) as Array<Character>;
    });
  }

  changed() {
    console.log('cb changed!');
    this.checked = !this.checked;
  }

  mainClick() {
    console.log('toggle main filter');
  }
}