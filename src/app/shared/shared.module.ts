import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [
  FormsModule,
  HttpModule,
  BrowserModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
