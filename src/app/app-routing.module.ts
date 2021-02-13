import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropZoneComponent } from './component/drop-zone/drop-zone.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
