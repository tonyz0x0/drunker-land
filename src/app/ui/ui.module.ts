import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [LayoutComponent, MainNavComponent, MainContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule { }
