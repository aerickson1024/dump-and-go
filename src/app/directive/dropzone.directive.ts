import { Directive, HostBinding, HostListener, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective implements OnInit {
  @HostBinding('class.dropzone-activated') activated = false;
  @HostListener('dragover', ['$event'])
  onDragover(event: PointerEvent) {
    event.stopPropagation();
    event.preventDefault();
    console.log('you drug over a file!');
    this.activated = true;
  }
  @HostListener('dragleave', ['$event'])
  onDragleave(event: PointerEvent) {
    console.log('file has left');
    this.activated = false;
  }
  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    event.preventDefault();
    console.log('dropped file!');

    
    if (event.dataTransfer) {
      const file = event.dataTransfer.files[0];
      this.reader.readAsText(file, 'UTF-8');
    }
  }
  @Output() guildData: EventEmitter<string>;
  reader: FileReader;

  constructor() {
    console.log('dropzone directive');
    this.guildData = new EventEmitter<string>();
    this.reader = new FileReader();
  }

  ngOnInit() {
    this.reader.onload = (event: any) => {
      console.log('file loaded');
      this.guildData.emit(event.target.result);
    }
  }
}