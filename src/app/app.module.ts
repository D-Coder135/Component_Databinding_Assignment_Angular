import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GameControlComponent} from './game-control/game-control.component';
import {OddComponent} from './odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
