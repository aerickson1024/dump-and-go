import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from 'src/app/class/character';
import { DataParserService } from 'src/app/service/data-parser.service';
import { RosterPipe } from 'src/app/pipe/roster.pipe';
import { ClipboardService } from 'ngx-clipboard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.less']
})
export class RosterComponent implements OnInit, OnDestroy {
  dataDumpSub: Subscription;
  characters: Array<Character>;
  filteredCharacters: Array<Character>;
  filterMains: boolean;
  filterMainBoxes: boolean;
  filterAlts: boolean;
  copied: boolean;

  constructor(private dps: DataParserService, private rosterPipe: RosterPipe, private clipboard: ClipboardService) {
    this.dataDumpSub = new Subscription();
    this.characters = new Array<Character>();
    this.filteredCharacters = new Array<Character>();
    this.filterMains = true;
    this.filterMainBoxes = true;
    this.filterAlts = true;
    this.copied = false;
  }

  ngOnInit() {
    this.dataDumpSub = this.dps.dataDump.subscribe(async (dump: string) => {
      console.log('roster window accepting dump');
      this.characters = await this.dps.prepareData(dump) as Array<Character>;

      this.filteredCharacters = this.rosterPipe.transform(this.characters, this.filterMains, this.filterMainBoxes, this.filterAlts);
    });

  }

  toggleMainsFilter() {
    console.log('toggle mains filter');
    this.filterMains = !this.filterMains;
    this.filteredCharacters = this.rosterPipe.transform(this.characters, this.filterMains, this.filterMainBoxes, this.filterAlts);
  }

  toggleMainBoxesFilter() {
    console.log('toggle main-boxes filter');
    this.filterMainBoxes = !this.filterMainBoxes;
    this.filteredCharacters = this.rosterPipe.transform(this.characters, this.filterMains, this.filterMainBoxes, this.filterAlts);
  }

  toggleAltsFilter() {
    console.log('toggle alts filter');
    this.filterAlts = !this.filterAlts;
    this.filteredCharacters = this.rosterPipe.transform(this.characters, this.filterMains, this.filterMainBoxes, this.filterAlts);
  }

  copyToClipboard() {
    console.log('copied');
    this.copied = true;

    let characterString = this.dps.formatForClipboard(this.filteredCharacters);
    this.clipboard.copy(characterString);
    console.log('copied to clipboard!');
    
    setTimeout(() => this.copied = !this.copied, 1000);
  }

  ngOnDestroy() {
    this.dataDumpSub.unsubscribe();
  }
}