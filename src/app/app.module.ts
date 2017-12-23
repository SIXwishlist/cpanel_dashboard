import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProgressBarModule} from "ng2-progress-bar";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
