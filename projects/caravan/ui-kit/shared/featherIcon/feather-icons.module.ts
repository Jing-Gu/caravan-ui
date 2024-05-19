import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Star, ChevronDown, HelpCircle } from 'angular-feather/icons';

const icons = {Star, ChevronDown, HelpCircle};
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule { }
