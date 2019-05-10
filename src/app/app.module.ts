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
import { VparentComponent } from './viewchild/vparent/vparent.component';
import { VchildComponent } from './viewchild/vchild/vchild.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
<<<<<<< HEAD
=======
import { HookComponent } from './hook/hook.component';
>>>>>>> master


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeroesComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    NodeparentComponent,
    NodechildComponent,
    VparentComponent,
    VchildComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
    BookComponent
=======
    BookComponent,
    HookComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
