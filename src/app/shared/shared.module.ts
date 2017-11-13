import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { ModalCloseFooterComponent } from './modal/modal-close-footer';
import { ModalCloseHeaderComponent } from './modal/modal-close-header';
import { ModalComponent } from './modal/modal.component';

const MODULES = [
  FormsModule,
  HttpModule,
  BrowserModule,
  BrowserAnimationsModule,
  UiSwitchModule
];

const COMPONENTS = [
  ModalComponent,
  ModalCloseFooterComponent,
  ModalCloseHeaderComponent
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ]
})
export class SharedModule { }
