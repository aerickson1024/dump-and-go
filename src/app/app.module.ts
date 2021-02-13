import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropZoneComponent } from './component/dropzone/dropzone.component';
import { DropzoneDirective } from './directive/dropzone.directive';
import { RosterComponent } from './component/roster/roster.component';

@NgModule({
  declarations: [
    AppComponent,
    DropZoneComponent,
    DropzoneDirective,
    RosterComponent
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
 