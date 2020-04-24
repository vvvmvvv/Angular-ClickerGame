import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartComponent } from './start/start.component';
import { ErrorComponent } from './error/error.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {InfoService} from './service/info.service'

import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ErrorComponent,
    GameComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    NgbModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
