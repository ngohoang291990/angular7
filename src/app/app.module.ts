import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';
import { NodeparentComponent } from './nodeparent/nodeparent.component';
import { NodechildComponent } from './nodechild/nodechild.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeroesComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    NodeparentComponent,
    NodechildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
