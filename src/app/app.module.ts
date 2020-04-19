import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCollectionComponent } from './components/game-collection/game-collection.component';
import {NgMetro4Module} from "ng-metro4";
import { GameComponent } from './components/game/game.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TetrisComponent } from './components/tetris/tetris.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCollectionComponent,
    GameComponent,
    WelcomeComponent,
    CommentsComponent,
    TetrisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMetro4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
