export class Character {
  name: string;
  level: number;
  eqClass: string;
  rank: string;
  note: string;

  constructor(name: string, level: number, eqClass: string, rank: string, note: string) {
    this.name = name;
    this.level = level;
    this.eqClass = eqClass;
    this.rank = rank;
    this.note = note;
  }
}
