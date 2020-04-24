import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '',   redirectTo: '/start', pathMatch: 'full' },
  { path: 'game', component: GameComponent},
  { path: 'result', component: ResultComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
