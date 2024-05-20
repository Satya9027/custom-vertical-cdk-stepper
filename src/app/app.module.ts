import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkStepperModule} from "@angular/cdk/stepper";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
