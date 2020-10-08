import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagetitleComponent } from './pagetitle/pagetitle.component';

@NgModule({
  declarations: [PagetitleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PagetitleComponent]
})
export class UiModule { }
