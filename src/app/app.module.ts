import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropZoneComponent } from './component/drop-zone/drop-zone.component';
import { DropzoneDirective } from './directive/dropzone.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropZoneComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DropzoneDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 