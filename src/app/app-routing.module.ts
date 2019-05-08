import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeroesComponent } from './heroes/heroes.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  {path:'heroes',component:HeroesComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
