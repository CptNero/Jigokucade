import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameCollectionComponent} from "./components/game-collection/game-collection.component";
import {GameComponent} from "./components/game/game.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";


const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'game-collection', component: GameCollectionComponent},
  { path: 'game/:id', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
