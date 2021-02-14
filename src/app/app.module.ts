import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropZoneComponent } from './component/dropzone/dropzone.component';
import { DropzoneDirective } from './directive/dropzone.directive';
import { RosterComponent } from './component/roster/roster.component';
import { RosterPipe } from './pipe/roster.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DropZoneComponent,
    DropzoneDirective,
    RosterComponent,
    RosterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DropzoneDirective,
    RosterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 