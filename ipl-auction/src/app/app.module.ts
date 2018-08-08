import { PlayersService } from './services/players.service';
/**** Core Modules ****/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/**** Custom components ****/
import { AppComponent } from './app.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
/**** Npm packages ****/
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
